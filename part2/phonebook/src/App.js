import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
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

  if (persons.includes(newName)) {
    return (
      <div>
        <h2>Phonebook</h2>
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
            </li>
          ))}
        </ul>
        {window.alert(`${newName} is already added to phonebook`)}
      </div>
    );
  } else {
    return (
      <div>
        <h2>Phonebook</h2>
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
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default App;
