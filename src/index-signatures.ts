export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Tomo', underTwenty: false };

// index signaturesの書き方
// { [index: typeForIndex]: typeForValue }
profile.name = 'Tomo';
profile.age = 43;
profile.nationality = 'Japan';
