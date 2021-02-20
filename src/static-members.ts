export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = 'Tomoki';
  static lastName: string = 'Yao';

  static work(): string {
    return `Hey, guys! This is ${this.firstName}!`;
  }
}

// let me = new Me();
// console.log(me.isProgramer);

console.log(Me.isProgramer);
console.log(Me.work());
