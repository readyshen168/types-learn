const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  // 使用 ts-jest 预设，这是处理 TypeScript 的标准方式
  preset: 'ts-jest',
  // 测试环境
  testEnvironment: "node",
  // 转换规则（保留自动生成的配置）
  transform: {
    ...tsJestTransformCfg,
  },
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
  // 强制收集所有文件的覆盖率
  // collectCoverageFrom: [
    //'src/**/*.ts',
    //'!src/**/*.d.ts',
    //'!src/__tests__/**/*.ts'
  //],
  // 禁用缓存
  //cache: false,
  //clearMocks: true,
  
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