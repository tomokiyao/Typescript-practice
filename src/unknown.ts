export {};

const kansu = (): number => 23;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log({ sumAny });

// コンパイルエラー
// let sumUnknown = numberUnknown + 10;

// タイプガードを行うことで解決
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log({ sumUnknown });
}
