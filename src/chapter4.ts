// 타입 별칭

type User = {
  id?: number;
  name?: string;
  nickname?: string;
  phone?: number;
  email?: string;
  age?: number;
  gender?: string;
};

let user: User = {
  id: 1,
  name: "김장한",
  nickname: "한진",
  phone: 10,
  email: "khan@kh.com",
  age: 30,
  gender: "male",
};
let user2: User = {};

// 인덱스 시그니처

type CountryCodes = { [key: string]: string };

let countrycCodes: CountryCodes = {
  KR: "Korea",
  US: "United States",
  JP: "Japan",
};

type CountryNumberCodes = { [key: string]: number; Korea: number };

let countryNumberCodes = {
  Korea: 410,
  UnitedStates: 1,
  Japan: 81,
};
