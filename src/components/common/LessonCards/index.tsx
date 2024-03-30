import React, { FC } from "react";

import { ILessons } from "features/lessons/types";

import "./styles.scss";

interface Props {
  cards: ILessons[];
}

const LessonCards: FC<Props> = ({ cards }) => {
  return (
    <div className="cards-container">
      {cards.map(({ id, lesson }) => (
        <div key={id} className="card">
          {lesson}
        </div>
      ))}
    </div>
  );
};

export default LessonCards;
