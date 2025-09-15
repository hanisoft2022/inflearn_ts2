// 숫자 배열
let numArr: number[] = [1, 2, 3];

// 문자열 배열
let strArr: string[] = ['a', 'b', 'c'];

// 불리언
let boolArr: Array<boolean> = [true, false, true]; // 후자의 방식(ex. number[]) 더 많이 사용

// 배열에 들어가는 요소들의 타입이 다양한 경우
let arr: (number | string | boolean)[] = [1, 'a', true];

// 다차원 배열의 타입을 정의하는 방법
let arr2: number[][] = [[1, 2, 3], [4, 5, 6]];
let arr3: (string | number)[][] = [['a', 'b', 'c'], [1, 2, 3]];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, string, boolean] = [1, 'a', true];
const user: [string, number][] = [['김장한', 1], ['김한장', 2], ['김한빈', 3], ['김한빈', 4]];