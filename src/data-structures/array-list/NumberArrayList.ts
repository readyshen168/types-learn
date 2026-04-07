export class NumberArrayList {
    // 用数组来装列表各项数据
    private numbers: number[] = [];
    // 数组长度
    private length: number = 0;

    // at方法: 返回指定坐标的数据
    at(index: number): number {
        if(index >= this.length) throw new RangeError();
        return this.numbers[index];
    }

    // apend方法： 在列表后面增加数据
    apend(value: number): void {
        // 新建数组，长度是当前numbers的长度+1
        const newNumbers: number[] = new Array(this.length + 1);
        // 把当前numbers的数据都复制到新数组
        for(let i = 0; i < this.length; i++) {
            newNumbers[i] = this.numbers[i];
        }
        // 把value装入新数组的最后一个位置
        newNumbers[this.length] = value;
        // numbers指向新数组
        this.numbers = newNumbers;
        // length值+1
        this.length++;
    }
}