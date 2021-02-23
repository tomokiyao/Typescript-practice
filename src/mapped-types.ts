export {};

type Profile = {
  name: string;
  age: number;
};

type PertialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

// Partialの中身
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type OptionalProfile = Optional<Profile>;
