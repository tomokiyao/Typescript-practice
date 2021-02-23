export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Tomo',
  age: 23,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Kono',
  age: 24,
};

// ReadonlyなのでError
// friend.age++;

// Readonlyの中身
type Yomitori<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriProfile = Yomitori<Profile>;
