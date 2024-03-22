import React, { FC, useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "hooks";
import { fetchDictionary } from "features/dictionary/actions";
import {
  greenWordsAdded,
  yellowWordsAdded,
  redWordsAdded,
} from "features/dictionary/slice";

import "./styles.scss";
import { getRandomElement } from "../../../utils";

interface IType {
  quantity: number;
  percent: number;
}

interface IProgressBar {
  green: IType;
  yellow: IType;
  red: IType;
}

const MainComponent: FC = () => {
  const dispatch = useAppDispatch();
  const { dictionary, greenWords, yellowWords, redWords } = useAppSelector(
    (state) => state.dictionary,
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [questionText, setQuestionText] = useState<string>("Переведите слово:");
  const [userAnswer, setUserAnswer] = useState<string>("");

  const [progressBar, setProgressBar] = useState<IProgressBar>({
    green: { quantity: 0, percent: 0 },
    yellow: { quantity: 0, percent: 0 },
    red: { quantity: 0, percent: 0 },
  });

  const allDictionary = useMemo(() => {
    return dictionary.filter(
      (dictWord) =>
        !greenWords.some(
          (greenWord) =>
            greenWord.ru === dictWord.ru && greenWord.en === dictWord.en,
        ),
    );
  }, [dictionary, greenWords]);

  useEffect(() => {
    dispatch(fetchDictionary());
  }, [dispatch]);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = () => {
    setUserAnswer("");
    const dictionaryOnePercent = (1 / allDictionary.length) * 100;

    const correctUserAnswer = userAnswer.trim().toLocaleLowerCase();
    const dictionaryValueEn =
      allDictionary[currentQuestionIndex].en.toLocaleLowerCase();

    let right = 0;
    let wrong = Math.abs(correctUserAnswer.length - dictionaryValueEn.length);

    const valueEn =
      correctUserAnswer.length < dictionaryValueEn.length
        ? correctUserAnswer
        : dictionaryValueEn;

    for (let i = 0; i < valueEn.length; i++) {
      if (correctUserAnswer[i] === dictionaryValueEn[i]) {
        right += 1;
      } else wrong += 1;
    }

    const correct = (wrong / (right + wrong)) * 100;

    if (!correct) {
      setProgressBar((prev) => ({
        ...prev,
        green: {
          quantity: prev.green.quantity + 1,
          percent: prev.green.percent + dictionaryOnePercent,
        },
      }));
      dispatch(greenWordsAdded(allDictionary[currentQuestionIndex]));
      setQuestionText(`Верно - «${dictionaryValueEn}», а теперь переведите:`);
      return;
    }

    if (correct < 30) {
      setProgressBar((prev) => ({
        ...prev,
        yellow: {
          quantity: prev.yellow.quantity + 1,
          percent: prev.yellow.percent + dictionaryOnePercent,
        },
      }));
      dispatch(yellowWordsAdded(allDictionary[currentQuestionIndex]));
      setQuestionText(
        `Почти правильно - «${dictionaryValueEn}», следующее слово:`,
      );
    } else {
      setProgressBar((prev) => ({
        ...prev,
        red: {
          quantity: prev.red.quantity + 1,
          percent: prev.red.percent + dictionaryOnePercent,
        },
      }));
      dispatch(redWordsAdded(allDictionary[currentQuestionIndex]));
      setQuestionText(`Неверно - «${dictionaryValueEn}», идем дальше:`);
    }
  };

  useEffect(() => {
    setCurrentQuestionIndex(getRandomElement(allDictionary));
  }, [allDictionary]);

  console.log(currentQuestionIndex, allDictionary.length, "<><><>");

  const question = useMemo(() => {
    let word = "";
    if (allDictionary[currentQuestionIndex]) {
      word = allDictionary[currentQuestionIndex].ru;
    }
    return allDictionary.length
      ? `${questionText} «${word}»`
      : "Вопросы кончились!";
  }, [allDictionary, currentQuestionIndex, questionText]);

  return (
    <div className="main-container">
      <div className="progress-bar">
        {Object.entries(progressBar).map(([color, { quantity, percent }]) => (
          <div
            key={color}
            className="progress"
            style={{
              width: `${percent}%`,
              backgroundColor: color,
            }}
          >
            {quantity}
          </div>
        ))}
      </div>
      <div className="question">{question}</div>
      <div className="answer-section">
        <input
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button onClick={handleSubmit}>Отправить</button>
      </div>
    </div>
  );
};

export default MainComponent;
