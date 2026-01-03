// 这两个类分开写在src/data-structures/linked-list中，文件名同类名
class NumberListNode {
    value: number;
    next: NumberListNode | undefined;

    constructor(value: number) {
        this.value = value;
        this.next = undefined;
    }
}

class NumberLinkedList {
    private tail: NumberListNode = { value: 0, next: undefined};
    private head: NumberListNode = this.tail;

    append(value: number): void{
        this.tail.next = { value: value, next: undefined };
        this.tail = this.tail.next;
    }

    at(index: number): number {
        let result = this.head.next; 
        for(let i = 0; i < index && result != undefined; i++){
                result = result.next;
        }

        if(result == undefined) throw new RangeError();
        return result.value;

    }
}