export {};

class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('taro', 20, 'Japan');

// #ERROR
// let hanako = new Person(false, 20);

console.log(taro);
console.log({ name: taro.name });

// ageはprivateなのでERROR
// console.log({ age: taro.age });

console.log(taro.profile());
let taro2 = new Android('taro', 20, 'Japan');
console.log(taro2.profile());
