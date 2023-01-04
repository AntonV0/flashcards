import { createSlice } from "@reduxjs/toolkit";

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
      const { id, name, topicId, cardIds } = action.payload;
      // Storing these values as a new 'quiz' object
      state.quiz[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
});

// Exporting selector that selects the 'quiz' object nested within 'initialState'
export const selectQuiz = (state) => state.quizzes.quizzes;

// Exporting actions
export const { addQuiz } = quizzesSlice.actions;

// Default exporting the reducer
export default quizzesSlice.reducer;