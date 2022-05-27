import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import peopleReducer from "./slice";

export default configureStore({
  reducer: {
    data: peopleReducer,
  },
});
