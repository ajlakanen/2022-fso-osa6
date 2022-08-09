import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdotes";

const anecdotesAtStart = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const initialState = anecdotesAtStart.map(asObject);

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const vote = (id) => {
  return async (dispatch) => {
    const anecdotesOriginal = await anecdoteService.getAll();
    const anecdoteToChange = anecdotesOriginal.find((a) => a.id === id);
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1,
    };
    const response = await anecdoteService.update(id, changedAnecdote);
    const anecdotesChanged = anecdotesOriginal.map((a) =>
      a.id !== id ? a : { ...a, votes: a.votes + 1 }
    );
    dispatch(setAnecdotes(anecdotesChanged));
  };
};

const anecdotesSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    //vote(state, action) {
    //  // const anecdoteToChange = state.find((a) => a.id === action.payload);
    //  // const votesIncreased = {
    //  //   ...anecdoteToChange,
    //  //   votes: anecdoteToChange.votes + 1,
    //  // };
    //  const changed = state.map((anecdote) =>
    //    anecdote.id !== action.payload
    //      ? anecdote
    //      : { ...anecdote, votes: anecdote.votes + 1 }
    //  );
    //  return changed;
    //},

    appendAnecdote(state, action) {
      state.push(action.payload);
    },

    setAnecdotes(state, action) {
      console.log("action payload ", action.payload);
      return action.payload;
    },
  },
});

export const { appendAnecdote, setAnecdotes } = anecdotesSlice.actions;
export default anecdotesSlice.reducer;
