export {};

// Record<K, T>
type Prefectures = 'Tokyo' | 'Osaka' | 'Fukuoka' | 'Shiga';

type Covid19InfectionInfo = {
  kanjiName: string;
  confirmationCases: number;
};

// const covid19Japan: {
//   Tokyo: Covid19InfectionInfo;
//   Osaka: Covid19InfectionInfo;
//   Fukuoka: Covid19InfectionInfo;
//   Shiga: Covid19InfectionInfo;
// } = {
//   Tokyo: { kanjiName: '東京', confirmationCases: 400 },
//   Osaka: { kanjiName: '大阪', confirmationCases: 200 },
//   Fukuoka: { kanjiName: '福岡', confirmationCases: 50 },
//   Shiga: { kanjiName: '滋賀', confirmationCases: true },
// };

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanjiName: '東京', confirmationCases: 400 },
  Osaka: { kanjiName: '大阪', confirmationCases: 200 },
  Fukuoka: { kanjiName: '福岡', confirmationCases: 50 },
  Shiga: { kanjiName: '滋賀', confirmationCases: 30 },
};
