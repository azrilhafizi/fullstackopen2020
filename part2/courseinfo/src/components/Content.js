import React from "react";

const Content = (props) => {
  const { parts } = props.content;
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
