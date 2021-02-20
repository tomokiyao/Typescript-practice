export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Sasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const Matsui: Batter1 = {
  battingAverage: 0.367,
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };
// コメントアウト部分と同様
// intersection型
type TwoWayPlayer = Pitcher1 & Batter1;

const Otani: TwoWayPlayer = {
  throwingSpeed: 160,
  battingAverage: 0.333,
};
