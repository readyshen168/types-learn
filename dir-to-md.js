const fs = require('fs');
const path = require('path');

function generateDirectoryTree(dir, indent = '', ignorePatterns = [], maxDepth = 5, currentDepth = 0) {
  if (currentDepth > maxDepth) return '';
  
  let result = '';
  const items = fs.readdirSync(dir, { withFileTypes: true })
    .filter(item => {
      // 检查是否在忽略列表中
      return !ignorePatterns.some(pattern => {
        if (pattern.includes('*')) {
          const regex = new RegExp(pattern.replace(/\*/g, '.*'));
          return regex.test(item.name);
        }
        return item.name === pattern;
      });
    })
    .sort((a, b) => {
      // 目录在前，文件在后
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const prefix = isLast ? '└── ' : '├── ';
    const newIndent = indent + (isLast ? '    ' : '│   ');
    
    result += `${indent}${prefix}${item.name}\n`;
    
    if (item.isDirectory()) {
      const subPath = path.join(dir, item.name);
      result += generateDirectoryTree(
        subPath, 
        newIndent, 
        ignorePatterns, 
        maxDepth, 
        currentDepth + 1
      );
    }
  });
  
  return result;
}

// 配置
const config = {
  rootDir: process.cwd(),
  outputFile: 'DIRECTORY.md',
  ignore: [
    'node_modules',
    '.git',
    'coverage',
    'dist',
    'build',
    '.next',
    '.nuxt',
    '.vscode',
    '.idea',
    '__pycache__',
    '*.log',
    '*.tmp',
    '*.map',
    'Thumbs.db',
    '.DS_Store'
  ],
  maxDepth: 5
};

// 生成目录树
const tree = generateDirectoryTree(config.rootDir, '', config.ignore, config.maxDepth);

// 创建 Markdown 内容
const markdown = `# 项目目录结构

\`\`\`
${tree}
\`\`\`

> 生成时间: ${new Date().toLocaleString()}
> 忽略目录: ${config.ignore.join(', ')}
`;

// 写入文件
fs.writeFileSync(config.outputFile, markdown);
console.log(`✅ 目录结构已生成: ${config.outputFile}`);
