export {};

let name = 'Tomo';
name = 'Tomoki';

let nickname = 'Tomo' as const;
// Tomoで定義されているのでERROR
// nickname = 'Tomosuke';

let profile = {
  name: 'Tomo',
  height: 173,
} as const;

// let profile: {
//   readonly name: "Tomo";
//   readonly height: 173;
// }

// as const によってreadonlyになりERROR
// profile.name = 'Tomoki';
// profile.height = 180;
