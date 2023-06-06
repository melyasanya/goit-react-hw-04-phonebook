import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { InputForm } from './InputForm/InputForm';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('STATE')) || [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('STATE', JSON.stringify(contacts));
  }, [contacts]);

  const getFilterInput = e => {
    setFilter(e.target.value);
  };

  const addContact = (name, number) => {
    const newUser = {
      name,
      number,
      id: nanoid(),
    };

    const isFound = contacts.find(el => el.name === name);
    isFound
      ? alert(`${name} is already in contacts`)
      : setContacts(prev => [...prev, newUser]);
  };

  const filterNames = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <InputForm addContact={addContact} />
      <h1>Contacts</h1>
      <Filter getFilterInput={getFilterInput} filter={filter} />
      {contacts.length > 0 && (
        <Contacts contacts={filterNames()} handleDelete={handleDelete} />
      )}
    </>
  );
};
