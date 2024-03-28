import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import { ILessons } from "./types";
import { fetchLessons } from "./actions";

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchLessons.fulfilled,
      (state, action: PayloadAction<ILessons[]>) => {
        state.lessons = action.payload;
        state.isLoad = false;
      },
    );
    builder.addCase(fetchLessons.pending, (state) => {
      state.isLoad = true;
    });
  },
});

export const {} = lessonsSlice.actions;

export default lessonsSlice.reducer;
