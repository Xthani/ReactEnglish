import React from "react";

import { useAppSelector } from "hooks";

import Main from "components/common/Main";
import Button from "components/common/Button";
import LessonCards from "components/common/LessonCards";

const AddLessonPage = () => {
  const { lessons, isLoad } = useAppSelector((state) => state.lessons);
  return (
    <Main loading={isLoad}>
      <Button>Создать</Button>
      <LessonCards cards={lessons} />
    </Main>
  );
};

export default AddLessonPage;
