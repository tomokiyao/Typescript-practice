export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Tomo', 23);
console.log(me);
