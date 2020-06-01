import React from "react";

import "../index.css";

const Notification = ({ success, error }) => {
  if (success === null && error === null) {
    return null;
  } else if (success !== null) {
    return <div className="success">{success}</div>;
  } else {
    return <div className="error">{error}</div>;
  }
};

export default Notification;
