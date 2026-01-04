//import { first } from '../../utils';
import { first } from '@utils';

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

        test('应该找到第一个单字符字符串', () => {
            const strings = ["China", "d", "USA", "c", "b", "UK"];
            const predicate = (str: string) => str.length === 1;
            const result = first(strings, predicate);
            expect(result).toBe('d');
        
        });

        test('应该返回对象数组中符合条件的对象', () => {
            const users = [
                { id: 1, name: 'Tom', active: false },
                { id: 2, name: 'Mary', active: true},
                { id: 3, name: 'Kate', active: false},
                { id: 4, name: 'Jim', active: true},
            ];
            const predicate = (user: { active: boolean }) => user.active;
            const result = first(users, predicate);
            expect(result).toEqual(
                { id: 2, name: 'Mary', active: true},
            );
        });
    });

    // 谓词函数测试
    describe('谓词函数行为', () => {
        test('谓词函数应该只在必要时执行', () => {
            const numbers = [0, 1, 2, 3, 4, 5];
            let callCount = 0;
            const predicate = (num: number) => {
                callCount++;
                return num > 3;
            };
            const result = first(numbers, predicate);

            expect(result).toBe(4);
            expect(callCount).toBe(5);

        });

        test('应该处理总是返回true的谓词函数', () => {
            const numbers = [100, 200, 300];
            const predicate = () => true;
            
            const result = first(numbers, predicate);

            expect(result).toBe(100);
        });

        test('应该处理总是返回false的谓词函数', () => {
            const numbers = [300, 200, 100];
            const predicate = () => false;

            const result = first(numbers, predicate);
            expect(result).toBeUndefined();
        });

    });


    // 边界测试
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
});