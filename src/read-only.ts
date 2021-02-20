export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Tomo');

console.log(myVisaCard.owner);

// 読み取り専用プロパティーなので変更できない。
// myVisaCard.owner = 'Tomoki';
