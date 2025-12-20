import { first } from '../../utils/first';

/**
 * first函数单元测试
 * 测试边界条件、正常情况、异常情况
 */
describe('first函数', () => {
    
    // 测试1：正常情况 - 找到匹配元素
    describe('正常情况', () => {
        test('应该找到第一个负数', () => {
            const numbers = [1, 2, -3, 4, 5];
            const predicate = (n: number) => n < 0;
            //console.log('测试1: 调用 first');

            const result = first(numbers, predicate);
            //console.log('测试1: 结果', result);

            expect(result).toBe(-3);
            
        })
    });

    /*
    // 测试2： 边界测试
    describe('边界情况', () => {
        test('空数组应该返回undefined', () => {
            console.log('测试2: 调用 first 空数组');
            const result = first([], () => true);
            console.log('测试2: 结果', result, '类型:', typeof result);
            expect(result).toBeUndefined();
        });

        test('没有匹配元素应该返回undefined', () => {
            console.log('测试3: 调用 first 无匹配');
            const result = first([1, 2, 3], n => n < 0);
            console.log('测试3: 结果', result, '类型:', typeof result);
            expect(result).toBeUndefined();
        });
    });
    */
});