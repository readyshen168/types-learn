"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { first } from '../../utils';
var _utils_1 = require("@utils");
/**
 * first函数单元测试
 * 测试边界条件、正常情况、异常情况
 */
describe('first函数', function () {
    // 测试1：正常情况 - 找到匹配元素
    describe('正常情况', function () {
        test('应该找到第一个负数', function () {
            var numbers = [1, 2, -3, 4, 5];
            var predicate = function (n) { return n < 0; };
            //console.log('测试1: 调用 first');
            var result = (0, _utils_1.first)(numbers, predicate);
            //console.log('测试1: 结果', result);
            expect(result).toBe(-3);
        });
        test('应该找到第一个单字符字符串', function () {
            var strings = ["China", "d", "USA", "c", "b", "UK"];
            var predicate = function (str) { return str.length === 1; };
            var result = (0, _utils_1.first)(strings, predicate);
            expect(result).toBe('d');
        });
        test('应该返回对象数组中符合条件的对象', function () {
            var users = [
                { id: 1, name: 'Tom', active: false },
                { id: 2, name: 'Mary', active: true },
                { id: 3, name: 'Kate', active: false },
                { id: 4, name: 'Jim', active: true },
            ];
            var predicate = function (user) { return user.active; };
            var result = (0, _utils_1.first)(users, predicate);
            expect(result).toEqual({ id: 2, name: 'Mary', active: true });
        });
    });
    // 谓词函数测试
    describe('谓词函数行为', function () {
        test('谓词函数应该只在必要时执行', function () {
            var numbers = [0, 1, 2, 3, 4, 5];
            var callCount = 0;
            var predicate = function (num) {
                callCount++;
                return num > 3;
            };
            var result = (0, _utils_1.first)(numbers, predicate);
            expect(result).toBe(4);
            expect(callCount).toBe(5);
        });
        test('应该处理总是返回true的谓词函数', function () {
            var numbers = [100, 200, 300];
            var predicate = function () { return true; };
            var result = (0, _utils_1.first)(numbers, predicate);
            expect(result).toBe(100);
        });
        test('应该处理总是返回false的谓词函数', function () {
            var numbers = [300, 200, 100];
            var predicate = function () { return false; };
            var result = (0, _utils_1.first)(numbers, predicate);
            expect(result).toBeUndefined();
        });
    });
    // 边界测试
    describe('边界情况', function () {
        test('空数组应该返回undefined', function () {
            console.log('测试2: 调用 first 空数组');
            var result = (0, _utils_1.first)([], function () { return true; });
            console.log('测试2: 结果', result, '类型:', typeof result);
            expect(result).toBeUndefined();
        });
        test('没有匹配元素应该返回undefined', function () {
            console.log('测试3: 调用 first 无匹配');
            var result = (0, _utils_1.first)([1, 2, 3], function (n) { return n < 0; });
            console.log('测试3: 结果', result, '类型:', typeof result);
            expect(result).toBeUndefined();
        });
    });
});
