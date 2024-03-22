import axios from "axios";
import { setError } from "features/error/errorSlice";
import { Store } from "@reduxjs/toolkit";

export const axiosInstance = axios.create({
  baseURL: process.env.PUBLIC_URL,
});

export const setupInterceptors = (store: Store) => {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status !== 200) {
        const message = error.response.data?.message || error.message;
        store.dispatch(setError(message));
      }
      return Promise.reject(error);
    },
  );
};
