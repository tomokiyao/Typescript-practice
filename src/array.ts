export {};

// 推奨される書き方
let numbers: number[] = [1, 2, 3];
let strings: string[] = ['Ruby', 'Typescript'];

// 非推奨な書き方
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka'];

let nijigen: number[][] = [
  [50, 100],
  [150, 200],
];

let hairetu: (string | number | boolean)[] = [1, false, 'tokyo'];

console.log({ numbers });
console.log({ strings });
console.log({ nijigen });
console.log({ hairetu });
