import React, { useState } from "react";
import ReactDOM from "react-dom";

import Statistic from "./Statistic";

const App = () => {
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  let all = good + neutral + bad;
  let avg = ((good * 1 + neutral * 0 + bad * -1) / all).toFixed(2);
  let positive = ((good / all) * 100).toFixed(2) + "%";

  if ((good || neutral || bad) === 0) {
    return (
      <div>
        <h2>Feedback</h2>
        <button onClick={increaseGood}>Good</button>
        <button onClick={increaseNeutral}>Neutral</button>
        <button onClick={increaseBad}>Bad</button>
        <br />
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Feedback</h2>
        <button onClick={increaseGood}>Good</button>
        <button onClick={increaseNeutral}>Neutral</button>
        <button onClick={increaseBad}>Bad</button>
        <br />
        <h2>Statistics</h2>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={all} />
        <Statistic text="Average" value={avg} />
        <Statistic text="Positive" value={positive} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
