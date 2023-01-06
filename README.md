# Flashcards
## Project #57 from Codecademy's Full Stack Engineer Career Path
### By Anton Vlasenko (AntonV0)  
## Project Outline
Flashcards is a React application that allows users to design any quiz they like. Users begin by adding their preferred topics, choosing from a selection of icons for each topic. Users can then design their own quiz for any of those topics, adding as many cards with front text (the question) and back text (the answer) as they wish. Completed quizzes and can be accessed in the "Quizzes" section of the webpage. Clicking any question reveals its answer.

This project uses Redux and the Redux Toolkit to manage complex state. The main objective was to create three separate slices of state - one for the quiz topics, one for the quiz itself, and one for the question/answer cards within the quiz. These slices were then connected to other files in the app, which includes all components (NewQuizForm, NewTopicForm, Card, Quiz, Quizzes, Topic, and Topics), as well as the Redux store.
## What I Learned
  - How to create and connect complex slices of state
  - Intermediate Redux logic with configureStore, createSlice, setting initialState, adding reducers for actions, asynchronous thunks, dispatching actions
  - Importing and exporting selectors, actions, and reducers
  - Dispatching actions and thunks within event handlers
  - Using the uuidv4() function from the uuid package to create unique identifiers
  - Using Redux DevTools to inspect payload status and action, and Chrome DevTools for general debugging
***
*Please note that in most cases, in each project, the first or second commit is the starter code provided by Codecademy.*
