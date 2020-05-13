import React from "react";

const Statistic = (props) => {
  return (
    <table>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </table>
  );
};

export default Statistic;
