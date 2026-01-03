import { NumberLinkedList } from '../../../data-structures';

describe('NumberLinkedList', () => {
    test('应该正确初始化', () => {
        const list = new NumberLinkedList();
        expect(list).toBeInstanceOf(NumberLinkedList);
    });
});