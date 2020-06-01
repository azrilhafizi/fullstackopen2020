import React from "react";
import axios from "axios";

const Delete = ({ id, name }) => {
  const handleDelete = (e) => {
    if (window.confirm(`Delete ${name} ?`)) {
      axios.delete(`http://localhost:3001/contacts/${id}`).then(() => {
        window.location.reload();
      });
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Delete;
