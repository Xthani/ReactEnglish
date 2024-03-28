import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import dictionaryReducer from "features/dictionary/slice";
import lessonsReducer from "features/lessons/slice";
import errorReducer from "features/error/errorSlice";
import { setupInterceptors } from "../services/api";

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  lessons: lessonsReducer,
  error: errorReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

setupInterceptors(store);

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
