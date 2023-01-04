import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";
// Slice export
export const quizzesSlice = createSlice({
  name: 'quizzes',
  // Setting initial state of 'quizzes' property to an empty object
  initialState: {
    // This object will hold all topics keyed by 'id'
    quizzes: {}
  },
  // Reducer for addQuiz action
  reducers: {
    addQuiz: (state, action) => {
      // Example payload for addQuiz action is:
      // { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
      const { id } = action.payload;
      // Storing these values as a new 'quiz' object
      state.quizzes[id] = action.payload;
    }
  }
});

// Thunk export
export const addQuizThunk = (newQuiz) => {
  const { topicId, id } = newQuiz;
  return (dispatch) => {
    // Dispatching action of creating new quiz
    dispatch(quizzesSlice.actions.addQuiz(newQuiz));
    // Dispatching action of associating new quiz with its topic
    dispatch(addQuizId({ topicId: topicId, quizId: id }));
  }
};


// Exporting selector that selects the 'quiz' object nested within 'initialState'
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Exporting actions
export const { addQuiz } = quizzesSlice.actions;

// Default exporting the reducer
export default quizzesSlice.reducer;