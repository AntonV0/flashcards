import { createSlice } from '@reduxjs/toolkit';

// Slice export
export const topicsSlice = createSlice({
  name: 'topics',
  // Setting intial state of 'topics' property to an empty object
  initialState: {
    // This object will hold all topics keyed by 'id'
    topics: {}
  },
  // Reducer for addTopic action
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
    }
  }
});

// Exporting selector that selects the 'topics' object nested within 'initialState'
export const selectTopics = (state) => state.topics.topics;

// Exporting actions
export const { addTopic } = topicsSlice.actions;

// Default exporting the reducer
export default topicsSlice.reducer;