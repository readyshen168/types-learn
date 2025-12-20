module.exports = {
    // 使用 ts-jest 预设，用于处理 TypeScript 文件
    preset: 'ts-jest',
    
    // 测试环境设置为 Node.js（非浏览器环境）
    testEnvironment: 'node',
    
    // 测试根目录：指定测试文件所在的根目录
    roots: ['<rootDir>/src'],
    
    // 测试文件匹配模式：定义如何识别测试文件
    testMatch: [
        '**/__tests__/**/*.test.ts',  // __tests__ 文件夹下的所有 .test.ts 文件
        '**/?(*.)+(spec|test).ts'     // 任何以 .spec.ts 或 .test.ts 结尾的文件
    ],
    
    // 模块路径映射：配置别名，与 tsconfig.json 中的 paths 对应
    moduleNameMapping: {
        '^@utils/(.*)$': '<rootDir>/src/utils/$1',  // @utils/ 映射到 src/utils/
        '^@/(.*)$': '<rootDir>/src/$1'              // @/ 映射到 src/
    },
    
    // 收集测试覆盖率信息
    collectCoverage: true,
    
    // 覆盖率报告输出目录
    coverageDirectory: 'coverage',
    
    // 覆盖率报告格式：文本、lcov、HTML
    coverageReporters: ['text', 'lcov', 'html'],
    
    // 测试覆盖率阈值：设置最低通过标准
    coverageThreshold: {
        global: {
            branches: 70,       // 分支覆盖率至少 70%
            functions: 70,      // 函数覆盖率至少 70%
            lines: 70,          // 行覆盖率至少 70%
            statements: 70      // 语句覆盖率至少 70%
        }
    }
};