import { ILessons } from "../features/lessons/types";
import { ISelectOption } from "../components/common/Select/types";

export function lessonsToOptions(lessons: ILessons[]): ISelectOption[] {
  return lessons.map(({ lesson }, index) => ({
    value: `lesson_${index}`,
    label: lesson,
  }));
}
