import { first } from './utils';

export function findFirstNegativeNumber(numbers: number[]): number | undefined{
    return first(numbers, num => num < 0 );
}

export function findFirstOneCharacterString(strings: string[]): string | undefined{
    return first(strings, str => str.length ===1 );
}