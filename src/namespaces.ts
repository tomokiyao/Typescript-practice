export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const tokyoMe = new Japanese.Tokyo.Person('Tomo');
const osakaMe = new Japanese.Osaka.Person('Tomoyan');

const englishMe = new English.Person('Mike', 'Joseph', 'Jyonson');
console.log(tokyoMe);
console.log(osakaMe);
console.log(englishMe);
