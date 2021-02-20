export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  pritable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (pritable) {
    console.log(bmi);
  }
  return bmi;
};

// bmi(身長、体重、console.logで出力するかどうか？)
// bmi(1.74, 55, true) console.logで出力
// bmi(1.74, 55, false) console.logで出力されない
// bmi(1.74, 55) console.logで出力されない

bmi(1.74, 55, true);
