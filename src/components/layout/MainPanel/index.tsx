import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "pages/HomePage";
import LessonPage from "pages/LessonPage";

const MainPanel = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lesson/:id" element={<LessonPage />} />
    </Routes>
  );
};

export default MainPanel;
