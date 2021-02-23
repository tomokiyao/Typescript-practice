export {};

let name: any = 'Tomo';
let length1: number = name.length;

// assersionはasを使用する。
let length2 = name.length as number;
let length3 = (name as string).length;

//非推奨
// let length4 = (<string>name).length;

// length1 = 'foo';
// length2 = 'foo';
// length3 = 'foo';
// length4 = 'foo';
