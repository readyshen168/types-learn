export function first<T>(elements: T[], p: (elem: T) => boolean ): T | undefined{
    for(let e of elements){
        if(p(e)){
            return e;
        }
    }
}