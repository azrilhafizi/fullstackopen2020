import React, { useState } from "react";
import ReactDOM from "react-dom";

const MostVote = (props) => {
  const mostvote = Math.max(...props.vote);
  const mostindex = props.vote.indexOf(mostvote);

  return <p>{props.anecdotes[mostindex]}</p>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(6).fill(0));

  const handleSubmit = () => {
    setSelected(Math.floor(Math.random() * Math.floor(6)));
  };

  const handleVote = () => {
    const copy = [...vote];
    copy[selected] += 1;
    setVote(copy);
  };

  return (
    <div>
      <h2>Anecdotes of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {vote[selected]} vote</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleSubmit}>next anecdote</button>
      <br />
      <h2>Anecdotes with most votes</h2>
      <MostVote vote={vote} anecdotes={anecdotes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
