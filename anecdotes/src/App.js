import { setAnecdotes, initializeAnecdotes } from "./reducers/anecdoteReducer";
import { store } from "./store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import anecdoteService from "./services/anecdotes";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // anecdoteService.getAll().then((anecdotes) => {
    //   store.dispatch(setAnecdotes(anecdotes));
    // });

    dispatch(initializeAnecdotes());
  }, []); // Pitäisikö hakasulkeiden sisään laittaa `dispatch`?

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
