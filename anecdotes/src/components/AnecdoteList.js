import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import { connect } from "react-redux";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <li>
      {anecdote.content}
      <br />
      has {anecdote.votes} votes <button onClick={handleClick}>vote</button>
    </li>
  );
};

const AnecdoteList = (props) => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    return props.anecdotes;
  });

  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            dispatch(vote(anecdote.id));
            dispatch(setNotification(`voted '${anecdote.content}'`, 5));
          }}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes.filter((a) => a.content.includes(state.filter)),
  };
};

const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList);

export default ConnectedAnecdotes;
