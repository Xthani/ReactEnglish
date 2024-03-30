import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import LessonPage from "pages/LessonPage";
import AddLessonPage from "../../../pages/AddLessonPage";

const MainPanel = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lesson/:id" element={<LessonPage />} />
      <Route path="/add-lesson-page" element={<AddLessonPage />} />
    </Routes>
  );
};

export default MainPanel;
