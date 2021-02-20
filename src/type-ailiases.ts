export {};

type Mojiretu = string;

const fooString: string = 'Hay!';
const fooMojiretu: Mojiretu = 'Hay!';

const example1 = {
  name: 'Tomo',
  age: 23,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Kono',
  age: 24,
};

type Profile2 = typeof example1;


console.log({ fooString });
console.log({ fooMojiretu });
console.log({ example1 });
console.log({ example2 });
