import React, { useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "hooks";
import { getRandomElement } from "utils";
import { fetchDictionary } from "features/dictionary/actions";
import {
  clearWords,
  greenWordsAdded,
  redWordsAdded,
  yellowWordsAdded,
} from "features/dictionary/slice";

interface IProgressBarItem {
  answeredCount: number;
  progressPercent: number;
}

interface IProgressBarState {
  green: IProgressBarItem;
  yellow: IProgressBarItem;
  red: IProgressBarItem;
}

enum AnswerStatus {
  Green = "green",
  Yellow = "yellow",
  Red = "red",
}

interface IAnswerType {
  value: string;
  status?: AnswerStatus;
}

export const useQuiz = () => {
  const dispatch = useAppDispatch();
  const { dictionary, greenWords, yellowWords, redWords } = useAppSelector(
    (state) => state.dictionary,
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [questionText, setQuestionText] = useState<string>("Переведите слово:");
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [answer, setAnswer] = useState<IAnswerType>({
    value: "",
  });
  const [progressBar, setProgressBar] = useState<IProgressBarState>({
    green: { answeredCount: 0, progressPercent: 0 },
    yellow: { answeredCount: 0, progressPercent: 0 },
    red: { answeredCount: 0, progressPercent: 0 },
  });
  const [dictionaryPercent, setDictionaryPercent] = useState<number>(100);

  const unansweredWords = useMemo(() => {
    return dictionary.filter(
      (dictWord) =>
        !greenWords.some(
          (greenWord) =>
            greenWord.ru === dictWord.ru && greenWord.en === dictWord.en,
        ),
    );
  }, [dictionary, greenWords]);

  const question = useMemo(() => {
    return unansweredWords.length && unansweredWords[currentQuestionIndex]
      ? `${questionText} «${unansweredWords[currentQuestionIndex].ru}»`
      : "Вопросы кончились!";
  }, [unansweredWords, currentQuestionIndex, questionText]);

  useEffect(() => {
    dispatch(fetchDictionary());
  }, [dispatch]);

  useEffect(() => {
    setCurrentQuestionIndex((prev) => getRandomElement(unansweredWords, prev));
  }, [unansweredWords]);

  useEffect(() => {
    setProgressBar({
      green: {
        answeredCount: greenWords.length,
        progressPercent: (greenWords.length / dictionary.length) * 100,
      },
      yellow: {
        answeredCount: yellowWords.length,
        progressPercent: (yellowWords.length / dictionary.length) * 100,
      },
      red: {
        answeredCount: redWords.length,
        progressPercent: (redWords.length / dictionary.length) * 100,
      },
    });
  }, [greenWords, yellowWords, redWords]);

  useEffect(() => {
    setDictionaryPercent((unansweredWords.length / dictionary.length) * 100);
  }, [unansweredWords, dictionary]);

  const handleClear = () => {
    dispatch(clearWords());
  };

  const handleSubmit = () => {
    setUserAnswer("");
    const correctUserAnswer = userAnswer.trim().toLocaleLowerCase();
    const dictionaryValueEn =
      unansweredWords[currentQuestionIndex].en.toLocaleLowerCase();

    let correctChars = 0;
    let incorrectChars = Math.abs(
      correctUserAnswer.length - dictionaryValueEn.length,
    );

    const comparisonBase =
      correctUserAnswer.length < dictionaryValueEn.length
        ? correctUserAnswer
        : dictionaryValueEn;

    for (let i = 0; i < comparisonBase.length; i++) {
      if (correctUserAnswer[i] === dictionaryValueEn[i]) {
        correctChars += 1;
      } else incorrectChars += 1;
    }

    const errorRate = (incorrectChars / (correctChars + incorrectChars)) * 100;
    if (!errorRate) {
      dispatch(greenWordsAdded(unansweredWords[currentQuestionIndex]));
      setQuestionText(`Верно - «${dictionaryValueEn}», а теперь переведите:`);
      setAnswer({ value: correctUserAnswer, status: AnswerStatus.Green });
      return;
    }

    if (errorRate < 30) {
      dispatch(yellowWordsAdded(unansweredWords[currentQuestionIndex]));
      setQuestionText(
        `Почти правильно - «${dictionaryValueEn}», следующее слово:`,
      );
      setAnswer({ value: correctUserAnswer, status: AnswerStatus.Yellow });
    } else {
      dispatch(redWordsAdded(unansweredWords[currentQuestionIndex]));
      setQuestionText(`Неверно - «${dictionaryValueEn}», идем дальше:`);
      setAnswer({ value: correctUserAnswer, status: AnswerStatus.Red });
    }
  };
  return {
    dictionaryPercent,
    unansweredWords,
    progressBar,
    question,
    handleClear,
    userAnswer,
    setUserAnswer,
    handleSubmit,
    answer,
  };
};
