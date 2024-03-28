import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "services/api";
import { ILessons } from "./types";

export const fetchLessons = createAsyncThunk(
  "lessons/fetchLessons",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get<ILessons[]>("/lessons.json");
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
