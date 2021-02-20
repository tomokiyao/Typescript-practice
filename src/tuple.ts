export {};

// tuple型
let profile: [string, number] = ['Tomo', 23];

// 0番目String, 1番目Numberで定義しているのでERROR
// profile = [23, 'Tomo'];

console.log({ profile });
