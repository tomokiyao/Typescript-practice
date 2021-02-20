export {};

let object: { name: string; age: number } = {
  name: 'Tomo',
  age: 23,
};

type ObjectType = { name: string; age: number };

let object2: ObjectType = {
  name: 'Tomo',
  age: 23,
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object3: ObjectInterface = {
  name: 'Tomo',
  age: 23,
};

console.log(object);
console.log(object2);
console.log(object3);
