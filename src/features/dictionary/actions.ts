import { createAsyncThunk } from "@reduxjs/toolkit";

import { axiosInstance } from "services/api";
import { shuffleArray } from "utils";
import { IDictionary } from "./types";

export const fetchDictionary = createAsyncThunk(
  "dictionary/fetchDictionary",
  async (_, thunkAPI) => {
    try {
      const res = await axiosInstance.get<IDictionary[]>("/dictionary.json");
      return shuffleArray(res.data);
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
