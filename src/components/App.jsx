import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Container, TitleContainer, TitleContacts, Message } from './App.styled';

const init = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" }];

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? init);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (name, number) => {
    const loweredCase = name.toLowerCase().trim();
    const searchName = contacts
      .some((cont) => cont.name.toLowerCase().trim() === loweredCase);

    if (searchName) {
      alert(`${name} is already in contacts`);
    } else if (name.length === 0) {
      alert("Fields must be filled!");
    } else {
      setContacts([
        ...contacts,
        {
          id: nanoid(),
          name,
          number,
        }]);
    };
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const visibleContacts = () => {
    return contacts.filter(contacts => contacts.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  return (
    <Container>
      <TitleContainer>Phonebook</TitleContainer>
      <ContactForm onAddContact={addContacts} />
      <TitleContacts>Contacts</TitleContacts>
      <Filter value={filter} onChangeFilter={changeFilter} />
          <ContactList
            contacts={visibleContacts()}
            onDeleteContact={deleteContact}
        />
      <Message>{contacts.length === 0 &&
          'You do not have contacts 😯'}</Message>
    </Container>
  );
};

export default App;