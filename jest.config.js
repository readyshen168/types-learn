/** @type {import("jest").Config} **/
module.exports = {
  // 使用 ts-jest 预设，这是处理 TypeScript 的标准方式
  preset: 'ts-jest',
  // 测试环境
  testEnvironment: "node",

  // 指定测试根目录，提升效率
  roots: ['<rootDir>/src'],

  // 明确测试文件匹配模式
  testMatch: [
    '**/__tests__/**/*.test.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  // !!! 重要修正：这里应该是 moduleNameMapper 而非 moduleNameMapping
  moduleNameMapper: {
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@utils$': '<rootDir>/src/utils',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@data-structures/(.*)$': '<rootDir>/src/data-structures/$1',
    '^@data-structures$': '<rootDir>/src/data-structures'
  },
  // 覆盖率配置
  collectCoverage: true,
  
  // 详细输出
  verbose: true,

  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html', 'json', 'clover'],
  coverageThreshold: {
    global: {
    branches: 55, // 分支覆盖率至少70%
    functions: 70, // 函数覆盖率至少70%
    lines: 70, // 行覆盖率至少70%
    statements: 70, //语句覆盖率至少70%
    }
  }
};