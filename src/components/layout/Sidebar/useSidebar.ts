import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useEffect } from "react";
import { fetchLessons } from "../../../features/lessons/actions";

export const useSidebar = () => {
  const dispatch = useAppDispatch();

  const { lessons, isLoad } = useAppSelector((state) => state.lessons);

  useEffect(() => {
    dispatch(fetchLessons());
  }, [dispatch]);

  return { lessons, isLoad };
};
