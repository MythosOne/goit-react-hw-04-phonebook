import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Container, TitleContainer, TitleContacts, Message } from './App.styled';

export class App extends Component {
state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      this.setState({ contacts: localStorageContacts });
    }
    console.log(localStorageContacts);
  }

  componentDidUpdate(prevState) {
      const { contacts }=this.state;
      if(contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  addContact = event => {
    const loweredCase = event.name.toLowerCase().trim();
    const searchName = this.state.contacts
      .some((cont) => cont.name.toLowerCase().trim() === loweredCase);

    if (searchName) {
      alert(`${event.name} is already in contacts`);
    } else if (event.name.length === 0) {
      alert("Fields must be filled!");
    } else {
      const contact = {
        ...event,
        id: nanoid(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = filter => {
    this.setState({ filter })
  };

  getVisibleContacts = () => {
    // const localStorageContacts = JSON.parse(localStorage.getItem('state'));
    // console.log(localStorageContacts)
    // const { filter, contacts } = localStorageContacts;
    const { filter, contacts } = this.state;

    return contacts.filter(contacts => contacts.name.toLowerCase().includes(filter.toLowerCase()))
  };

  deleteContact = contactId => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <TitleContainer>Phonebook</TitleContainer>

        <ContactForm onAddContact={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
        />
        <Message>{contacts.length === 0 &&
          'You do not have contacts 😯'}</Message>
      </Container>
  );
  }
};
