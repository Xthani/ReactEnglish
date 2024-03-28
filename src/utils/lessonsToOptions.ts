import { ILessons } from "../features/lessons/types";
import { ISelectOption } from "../components/common/Select/types";

export function lessonsToOptions(lessons: ILessons[]): ISelectOption[] {
  return lessons.map(({ lesson }, index) => ({
    value: `${index + 1}`,
    label: lesson,
  }));
}
