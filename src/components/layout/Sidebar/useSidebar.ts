import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "hooks";
import { fetchLessons } from "features/lessons/actions";
import { ISelectOption } from "components/common/Select/types";
import { clearWords } from "../../../features/dictionary/slice";

export const useSidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const match = location.pathname.match(/\/lesson\/(\d+)/); // Предполагая, что ID состоит только из цифр
  const defaultValue = match ? match[1] : undefined;

  const { lessons, isLoad } = useAppSelector((state) => state.lessons);

  const handleChange = (selectOption: ISelectOption) => {
    handleClear();
    if (selectOption.value) {
      navigate(`/lesson/${selectOption.value}`);
    } else {
      navigateToHome();
    }
  };

  const navigateToHome = () => navigate("/");

  const handleClear = () => {
    dispatch(clearWords());
  };

  useEffect(() => {
    dispatch(fetchLessons());
  }, [dispatch]);

  return {
    lessons,
    isLoad,
    handleChange,
    defaultValue,
    handleClear,
    navigateToHome,
    navigate,
  };
};
