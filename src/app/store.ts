import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../features/categories/categoriesSlice";
import catsSlice from "../features/cats/CatsSlice";

export const store = configureStore({
  reducer: {
    categoriesSlice: categoriesSlice,
    catsSlice: catsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
