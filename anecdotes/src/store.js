import { configureStore } from "@reduxjs/toolkit";
import anecdoteService from "./services/anecdotes";
import anecdotesReducer, { appendAnecdote } from "./reducers/anecdoteReducer";
import notificationReducer from "./reducers/notificationReducer";
import filterReducer from "./reducers/filterReducer";

export const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
    filter: filterReducer,
  },
});

anecdoteService.getAll().then((anecdotes) => {
  anecdotes.forEach((anecdote) => {
    store.dispatch(appendAnecdote(anecdote));
  });
});
