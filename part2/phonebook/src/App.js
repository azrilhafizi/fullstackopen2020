import React, { useState, useEffect } from "react";
import axios from "axios";

import Delete from "./components/Delete";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/contacts").then((res) => {
      setPersons(res.data);
    });
  }, []);

  const handleSumbit = (e) => {
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.findIndex((person) => person.name === newName) > -1) {
      if (
        window.confirm(
          `${newName} is already in the phonebook. Replace the number with new one?`
        )
      ) {
        const id = persons.find((person) => person.name === newName).id;
        console.log(id);

        axios
          .put(`http://localhost:3001/contacts/${id}`, personObject)
          .then((res) => {
            setPersons(persons.concat(res.data));
            setNewName("");
            setNewNumber("");
            setSuccess(`${newName} number has been changed`);
          })
          .catch((err) => {
            setError(`Information of ${newName} has been deleted`);
          });
      }
    } else {
      axios.post("http://localhost:3001/contacts", personObject).then((res) => {
        setPersons(persons.concat(res.data));
        setNewName("");
        setNewNumber("");
        setSuccess(`Added ${newName}`);
      });
    }
  };

  const personToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toUpperCase().match(filter.toUpperCase())
      );

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleName = (e) => {
    setNewName(e.target.value);
  };

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification success={success} error={error} />
      <div>
        filter shown with <input value={filter} onChange={handleFilter} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSumbit}>
        <div>
          name: <input value={newName} onChange={handleName} />
          number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personToShow.map((person) => (
          <li>
            {person.name} {person.number}
            <Delete id={person.id} name={person.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
