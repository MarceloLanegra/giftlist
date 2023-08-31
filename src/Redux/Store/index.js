import { configureStore } from "@reduxjs/toolkit";
import gistsReducer from "./GiftsSlice";

const store = configureStore({
  reducer: {
    gifts: gistsReducer,
  },
});

export default store;
