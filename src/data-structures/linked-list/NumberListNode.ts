export class NumberListNode {
    value: number;
    next: NumberListNode | undefined;

    constructor(value: number) {
        this.value = value;
        this.next = undefined;
    }
}