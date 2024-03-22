import { InitialState } from "./types";

export const initialState: InitialState = {
  dictionary: [],
  greenWords: [], // Словарь слов, которые знаю хорошо
  yellowWords: [], // Словарь слов, которые знаю, но совершил ошибки и нужно их повторить
  redWords: [], // Словарь слов, которые не знаю
  error: "",
  isLoad: false,
};
