import { configureStore } from "@reduxjs/toolkit";
// As reducers are default exports, they are imported without curly brackets
import topicsReducer from "../features/topics/topicsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer
  },
});
