export {};

let profile1: object = { name: 'Tomo' };
profile1 = { birthYear: 1997 };

console.log({ profile1 });

let profile2: {} = { name: 'Tomo' };
profile2 = { birthYear: 1997 };

console.log({ profile2 });

let profile3: { name: string } = { name: 'Tomo' };
profile3 = { name: 'Kono' };

console.log({ profile3 });
