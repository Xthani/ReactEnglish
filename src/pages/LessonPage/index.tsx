import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

import QuizComponent from "components/common/QuizComponent";
import { useAppSelector } from "hooks";

const LessonPage = () => {
  const { id } = useParams();
  const { lessons } = useAppSelector((state) => state.lessons);

  const lessonDictionary = useMemo(() => {
    if (id && lessons) return lessons[Number(id) - 1].dictionary;
  }, [lessons, id]);

  return <QuizComponent lessonDictionary={lessonDictionary} />;
};

export default LessonPage;
