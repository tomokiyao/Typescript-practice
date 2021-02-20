export {};

class Mahotsukai {}
class Souryo {}

//クラスを複数継承することはできない。
// class Taro extends Mahotsukai, Souryo {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

// interfaseを複数実装することは可能。
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
