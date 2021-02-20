export {};

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.74, 55));

const bmi2: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

console.log(bmi2(1.74, 55));
