import React from "react";

const Total = (props) => {
  const { parts } = props.total;
  const total = parts
    .map((part) => part.exercises)
    .reduce((sum, currentValue) => sum + currentValue);

  return (
    <div>
      <p>
        <b>total of {total} exercises</b>
      </p>
    </div>
  );
};

export default Total;
