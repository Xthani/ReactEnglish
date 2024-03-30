import { IDictionary } from "../dictionary/types";

export interface ILessons {
  id: string;
  lesson: string;
  dictionary: IDictionary[];
}

export interface InitialState {
  lessons: ILessons[];
  error: string;
  isLoad: boolean;
}
