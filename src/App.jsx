import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Pnonebook from './components/Phonebook/Phonebook';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import ContactsList from './components/ContactsList/ContactsList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts});
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


   const addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts([...contacts, contact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId),
    );
  };


  return (
      <>
        <Pnonebook
          title="Pnonebook"
          contacts={contacts}
          onSubmit={addContact}
        />
        <Contacts title="Contacts">
          <Filter
            title="Find contacts by name"
            value={filter}
            onChange={changeFilter}
          />
          <ContactsList
            contacts={getFilteredContact()}
            onDeleteContact={deleteContact}
          />
        </Contacts>
      </>
    );
}

export default App;
