export {};

let value: number | string = 1;
value = 'foo';
value = 100;

// booleanは未定義なのでERROR
// value = true;

console.log(value);
