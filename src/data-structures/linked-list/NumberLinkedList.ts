// import { NumberListNode } from './NumberListNode';

export class NumberLinkedList {

    private tail: NumberListNode = { value: 0, next: undefined};
    private head: NumberListNode = this.tail;

    append(value: number): void{
        this.tail.next = { value: value, next: undefined };
        this.tail = this.tail.next;
    }

    at(index: number): number {
        if (index < 0) throw new RangeError();
        let result = this.head.next; 
        for(let i = 0; i < index && result != undefined; i++){
                result = result.next;
        }

        if(result == undefined) throw new RangeError();
        return result.value;

    }
}