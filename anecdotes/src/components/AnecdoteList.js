import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  showNotificationWithTimeOut,
} from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <li>
      {anecdote.content}
      <br />
      has {anecdote.votes} votes <button onClick={handleClick}>vote</button>
    </li>
  );
};

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdotes)
    .slice()
    .sort((a, b) => b.votes - a.votes);
  const filter = useSelector((state) => state.filter);
  return (
    <ul>
      {anecdotes
        .filter((anecdote) => anecdote.content.includes(filter))
        .map((anecdote) => (
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
export default AnecdoteList;
