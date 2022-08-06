import Anecdotes from "./components/Anecdotes";
import CreateAnecdote from "./components/CreateAnecdote";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>

      <Anecdotes />
      <CreateAnecdote />
    </div>
  );
};

export default App;
