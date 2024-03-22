import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./initialState";
import { fetchDictionary } from "./actions";
import { IDictionary } from "./types";

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    clearWords(state) {
      state.greenWords = [];
      state.yellowWords = [];
      state.redWords = [];
    },
    greenWordsAdded(state, action: PayloadAction<IDictionary>) {
      state.yellowWords = state.yellowWords.filter(
        (word) => word.en !== action.payload.en,
      );
      state.redWords = state.redWords.filter(
        (word) => word.en !== action.payload.en,
      );

      if (state.greenWords.some((word) => word.en === action.payload.en))
        return;
      state.greenWords.push(action.payload);
    },
    yellowWordsAdded(state, action: PayloadAction<IDictionary>) {
      state.greenWords = state.greenWords.filter(
        (word) => word.en !== action.payload.en,
      );
      state.redWords = state.redWords.filter(
        (word) => word.en !== action.payload.en,
      );

      if (state.yellowWords.some((word) => word.en === action.payload.en))
        return;
      state.yellowWords.push(action.payload);
    },
    redWordsAdded(state, action: PayloadAction<IDictionary>) {
      state.greenWords = state.greenWords.filter(
        (word) => word.en !== action.payload.en,
      );
      state.yellowWords = state.yellowWords.filter(
        (word) => word.en !== action.payload.en,
      );

      if (state.redWords.some((word) => word.en === action.payload.en)) return;
      state.redWords.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchDictionary.fulfilled,
      (state, action: PayloadAction<IDictionary[]>) => {
        state.dictionary = action.payload;
        state.isLoad = false;
      },
    );
    builder.addCase(fetchDictionary.pending, (state) => {
      state.isLoad = true;
    });
  },
});

export const { clearWords, greenWordsAdded, redWordsAdded, yellowWordsAdded } =
  dictionarySlice.actions;

export default dictionarySlice.reducer;
