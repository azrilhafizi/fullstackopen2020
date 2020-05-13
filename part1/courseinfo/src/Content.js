import React from "react";

import Part from "./Part";

const Content = (props) => {
  return (
    <div>
      <Part
        no={1}
        part={props.parts[0].name}
        exercises={props.parts[0].exercises}
      />
      <Part
        no={2}
        part={props.parts[1].name}
        exercises={props.parts[1].exercises}
      />
      <Part
        no={3}
        part={props.parts[2].name}
        exercises={props.parts[2].exercises}
      />
    </div>
  );
};

export default Content;
