import { configureStore } from "@reduxjs/toolkit";
// As reducers are default exports, they are imported without curly brackets
import topicsReducer from "../features/topics/topicsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer
  },
});
