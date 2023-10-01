import React, { Component } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { AppContainer } from './App.styles';
import { nanoid } from 'nanoid';

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Henry Waterford', number: '666-66-66' },
  //     { id: 'id-2', name: 'Claudia Schiffer', number: '420-69-00' },
  //     { id: 'id-3', name: 'Vincent Van Gogh', number: '245-13-17' },
  //     { id: 'id-4', name: 'William Turner', number: '888-33-16' },
  //   ],
  //   filter: '',
  // };

  componentDidMount() {
    const localData = getFromLocalStorage('contacts');
    if (localData) {
      this.setState({ contacts: localData });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      saveToLocalStorage('contacts', this.state.contacts);
    }
  }

  handleFilterChange = filterValue => {
    this.setState({ filter: filterValue });
  };

  createContact = newContactData => {
    const isExist = this.state.contacts.find(
      contact => contact.name === newContactData.name
    );

    if (isExist) {
      return alert(`${newContactData.name} is already in contacts`);
    }
    const newContact = {
      ...newContactData,
      id: nanoid(),
    };

    this.setState(prev => ({
      contacts: [newContact, ...prev.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );

    return (
      <AppContainer>
        <h1>Phonebook</h1>
        <ContactForm createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </AppContainer>
    );
  }
}
