import { IDictionary } from "../dictionary/types";

export interface ILessons {
  lesson: string;
  dictionary: IDictionary[];
}

export interface InitialState {
  lessons: ILessons[];
  error: string;
  isLoad: boolean;
}
