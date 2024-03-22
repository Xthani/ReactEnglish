export interface IDictionary {
  ru: string;
  en: string;
}

export interface InitialState {
  dictionary: IDictionary[];
  greenWords: IDictionary[];
  yellowWords: IDictionary[];
  redWords: IDictionary[];
  error: string;
  isLoad: boolean;
}
