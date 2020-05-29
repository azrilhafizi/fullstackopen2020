import React from "react";

import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = (props) => {
  let header = props.course.name;
  let course = props.course;
  return (
    <div>
      <Header header={header} />
      <Content content={course} />
      <Total total={course} />
    </div>
  );
};

export default Course;
