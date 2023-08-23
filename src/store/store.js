import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../redux/slices/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
