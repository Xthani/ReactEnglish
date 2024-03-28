import React, { FC } from "react";

import { useQuiz } from "./useQuiz";
import { ArrowIcon } from "assets/icons";
import Button from "../Button";

import "./styles.scss";
import { IDictionary } from "../../../features/dictionary/types";

const QuizComponent: FC<{ lessonDictionary?: IDictionary[] }> = ({
  lessonDictionary,
}) => {
  const {
    dictionaryPercent,
    unansweredWords,
    progressBar,
    question,
    handleClear,
    userAnswer,
    setUserAnswer,
    handleSubmit,
    answer,
  } = useQuiz({ lessonDictionary });

  return (
    <div className="main-container">
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${dictionaryPercent}%`,
            backgroundColor: "grey",
          }}
        >
          {unansweredWords.length}
        </div>
        {Object.entries(progressBar).map(
          ([color, { answeredCount, progressPercent }]) => (
            <div
              key={color}
              className="progress"
              style={{
                width: `${progressPercent}%`,
                backgroundColor: color,
              }}
            >
              {answeredCount}
            </div>
          ),
        )}
      </div>
      <div className="question">
        {answer.value && (
          <div className={`answer ${answer.status}`}>{answer.value}</div>
        )}

        <div>{question}</div>
      </div>
      {!unansweredWords.length && (
        <Button onClick={handleClear}>Начать заново</Button>
      )}
      <div className="answer-section">
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (userAnswer.length && unansweredWords.length) {
              if (e.key === "Enter") handleSubmit();
            }
          }}
        />
        <Button
          disabled={!userAnswer.length || !unansweredWords.length}
          onClick={handleSubmit}
        >
          <ArrowIcon />
        </Button>
      </div>
    </div>
  );
};

export default QuizComponent;
