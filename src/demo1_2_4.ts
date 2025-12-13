function first<T>(elements: T[], p: (elem: T) => boolean ): T | undefined{
    for(let e of elements){
        if(p(e)){
            return e;
        }
    }
}


export function findFirstNegativeNumber(numbers: number[]): number | undefined{
    return first(numbers, num => num < 0 );
}

export function findFirstOneCharacterString(strings: string[]): string | undefined{
    return first(strings, str => str.length ===1 );
}