export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('エラーです。');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;

// never型は代入できない
// let hoge: never = undefined;

// never型に唯一代入できるのはnever型
let bar: never = error('only');

// const error2: (message: string) => never = (message) => {
//   throw new Error(message);
// };
// console.log(error2('error'));
