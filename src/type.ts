export type setFilterDataProps = {
setFilterData: React.Dispatch<React.SetStateAction<never[]>>
}

export type typeLanguage = {
  name: string;
  nativeName: string;
  iso639_2: string;
  iso639_1: string;
};

export type dataType = {
  altSpellings: string[];
  arean: number;
  borders: string[];
  capital: string[];
  capitalInfo: { latlng: number[] };
  car: { side: string; signs: string[] };
  cca2: string;
  cca3: string;
  ccn3: string;
  coatOfArms: { png: string; svg: string };
  continents: string[];
  currencies: { AUD: { name: string; symbol: string } };
  demonyms: { eng: { f: string; m: string } };
  flag: string;
  flags: { png: string; svg: string };
  idd: { root: string; suffixes: string[] };
  independent: boolean;
  landlocked: boolean;
  languages: { eng: string };
  latlng: number[];
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
    nativeName: { eng: { common: string; official: string } };
  };
  population: number;
  postalCode: { format: string; regex: string };
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    ara: { official: string; common: string };
    bre: { official: string; common: string };
    ces: { official: string; common: string };
    cym: { official: string; common: string };
    deu: { official: string; common: string };
    est: { official: string; common: string };
    fin: { official: string; common: string };
    fra: { official: string; common: string };
    hrv: { official: string; common: string };
    hun: { official: string; common: string };
    ita: { official: string; common: string };
    jpn: { official: string; common: string };
    kor: { official: string; common: string };
    nld: { official: string; common: string };
    per: { official: string; common: string };
    pol: { official: string; common: string };
    por: { official: string; common: string };
    rus: { official: string; common: string };
    slk: { official: string; common: string };
    spa: { official: string; common: string };
    srp: { official: string; common: string };
    swe: { official: string; common: string };
    tur: { official: string; common: string };
    urd: { official: string; common: string };
    zho: { official: string; common: string };
  };
  unMember: boolean;
};