import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./Slice";

export default configureStore({
  reducer: {
    data: peopleReducer,
  },
});
