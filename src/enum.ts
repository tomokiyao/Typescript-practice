export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum COLORS {
  RED = '#ff0000',
  WHITE = '#ffffff',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

// 定義していないものはERROR
// COLORS.LIGHT_GREEN;

// 追加できる
enum COLORS {
  YELLOW = '#FFF00',
}

let yellow = COLORS.YELLOW;
console.log({ yellow });
