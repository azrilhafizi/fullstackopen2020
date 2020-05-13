import React from "react";

const Part = (props) => {
  return (
    <div>
      <p>
        Part {props.no}: {props.part}
      </p>
      <p>Number of exercises: {props.exercises}</p>
    </div>
  );
};

export default Part;
