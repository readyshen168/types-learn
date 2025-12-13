export function findFirstNegativeNumber(numbers: number[]): number | undefined{
    for(let num of numbers){
        if(num < 0){
            return num;
        }
    }
}

export function findFirstOneCharacterString(strings: string[]): string | undefined{
    for(let str of strings){
        if(str.length === 1){
            return str;
        }
    }

}