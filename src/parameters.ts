export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Tomo', 23);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Kono', 24];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
