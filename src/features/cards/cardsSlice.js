import { createSlice } from "@reduxjs/toolkit";

// Slice export
export const cardsSlice = createSlice({
  name: 'cards',
  // Setting initial state of 'cards' property to an empty object
  initialState: {
    cards: {}
  },
  // Reducer for addCards action
  reducers: {
    addCards: (state, action) => {
      // Example payload for addCards action is:
      // { id: '123', front: 'front of card', back: 'back of card'}
      const { id } = action.payload;
      // Storing this value as a new 'card' object
      state.cards[id] = action.payload;
    }
  }
});

// Exporting selector that selects the 'card' object nested within 'initialState'
export const selectCards = (state) => state.cards.cards;

// Exporting actions
export const { addCards } = cardsSlice.actions;

// Default exporting the reducer
export default cardsSlice.reducer;