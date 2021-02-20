export {};

// stringのリテラル型
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';

// 想定外のデータでERROR
// dayOfTheWeek = '30';

console.log(dayOfTheWeek);

// numberのリテラル型
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;

// 想定外のデータでERROR
// month = 13;

console.log(month);

// booleanのリテラル型
let TRUE: true = true;

// 想定外のデータでERROR
// TRUE = false;

console.log(TRUE);

// タイプエイリアスを使用して
type Days = '日' | '月' | '火' | '水' | '木' | '金' | '土';
let dayOfTheWeek2: Days = '日';
dayOfTheWeek2 = '月';

// 想定外のデータでERROR
// dayOfTheWeek2 = '30';

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
let month2: Month = 1;
month2 = 12;

// 想定外のデータでERROR
// month2 = 13;
