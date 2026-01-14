//import { NumberLinkedList } from '../../../data-structures';
import { NumberLinkedList } from '@data-structures';


describe('NumberLinkedList 类', () => {
    test('应该正确初始化', () => {
        const list = new NumberLinkedList();
        expect(list).toBeInstanceOf(NumberLinkedList);
    });

    describe('append方法', () => {
        test('应该可以向空链表添加元素', () => {
            const list = new NumberLinkedList();
            list.append(10);
            expect((list as any).head.next?.value).toBe(10);
            expect((list as any).tail.value).toBe(10);
        });

        test('应该可以向链表添加多个元素', () => {
            const list = new NumberLinkedList();
            list.append(10);
            list.append(20);
            list.append(30);

            // 验证第一个节点
            expect((list as any).head.next.value).toBe(10);
            // 验证第二个节点
            expect((list as any).head.next.next.value).toBe(20);
            // 验证第三个节点
            expect((list as any).head.next.next.next.value).toBe(30);
            // 验证尾节点
            expect((list as any).tail.value).toBe(30);
        });

        test('添加元素后尾节点应该正确更新', () => {
            const list = new NumberLinkedList();

            list.append(100);
            // 验证第一个节点
            expect((list as any).tail.value).toBe(100);

            // 验证第二个节点
            list.append(200);
            expect((list as any).tail.value).toBe(200);
            // 验证第五个节点
            list.append(300);
            list.append(400);
            list.append(500);
            expect((list as any).tail.value).toBe(500);
        });
    });

    describe('at方法', () => {
        test('应该可以获取链表中的元素', () => {
            const list = new NumberLinkedList();
            list.append(1000);
            list.append(2000);
            list.append(3000);

            expect(list.at(0)).toBe(1000);
            expect(list.at(1)).toBe(2000);
            expect(list.at(2)).toBe(3000);
        });

        test('获取元素时应该保持链表不变', () => {
            const list = new NumberLinkedList();
            list.append(1);
            list.append(2);

            let firstGet = list.at(0);
            let secondGet = list.at(0);

            expect(firstGet).toBe(secondGet);
        });

        test('索引超出范围应该抛出RangeError', () => {
            const list = new NumberLinkedList();
            // 列表为空时， at(0)抛出错误， at(-1)抛出错误
            expect(() => list.at(0)).toThrow(RangeError);
            expect(() => list.at(-1)).toThrow(RangeError);
            // 列表长度为3时， at(0)、at(2)正常返回数值，at(3)抛出错误, at(-1)抛出错误
            list.append(1);
            list.append(2);
            list.append(3);

            expect(list.at(0)).toBe(1);
            expect(list.at(2)).toBe(3);
            expect(() => list.at(3)).toThrow(RangeError);
            expect(() => list.at(-1)).toThrow(RangeError);
        });

        test('应该正确处理边界索引', () => {
            const list = new NumberLinkedList();
            list.append(100);
            list.append(200);
            list.append(300);
            // 有效边界
            expect(list.at(0)).toBe(100);
            expect(list.at(2)).toBe(300);
            // 超出边界
            expect(() => list.at(3)).toThrow(RangeError);

        });

        test('应该处理只有一个元素的列表', () => {
            // 正确返回at(0)
            const list = new NumberLinkedList();
            list.append(0);
            expect(list.at(0)).toBe(0);
            // at(1)抛出错误
            expect(() => list.at(1)).toThrow(RangeError);

        });
    });
});