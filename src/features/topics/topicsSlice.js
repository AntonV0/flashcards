import { createSlice } from '@reduxjs/toolkit';

// Slice export
export const topicsSlice = createSlice({
  name: 'topics',
  // Setting intial state of 'topics' property to an empty object
  initialState: {
    // This object will hold all topics keyed by 'id'
    topics: {}
  },
  // Reducers for addTopic and addQuizId actions
  reducers: {
    addTopic: (state, action) => {
      // Example payload for addTopic action is:
      // {id: '123456', name: 'name of topic', icon: 'icon url'}
      const { id, name, icon } = action.payload;
      // Storing these values as a new 'topic' object
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        // Value of 'quizIds' property is stored in an empty array (as new topics won't have any associated quizzes)
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      // Example payload for addQuizId action is:
      // {quizId: '123', topicId: '456'}
      const { quizId, topicId } = action.payload;
      // Adding a quiz's 'id' to the 'quizId' array of the topic the new quiz is associated with
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

// Exporting selector that selects the 'topics' object nested within 'initialState'
export const selectTopics = (state) => state.topics.topics;

// Exporting actions
export const { addTopic, addQuizId } = topicsSlice.actions;

// Default exporting the reducer
export default topicsSlice.reducer;