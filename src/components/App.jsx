import React, { Component } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { AppContainer } from './App.styles';
import { nanoid } from 'nanoid';

export class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: '',
  // };
  state = {
    contacts: [
      { id: 'id-1', name: 'John Doe', number: '459-12-56' },
      { id: 'id-2', name: 'Tyler Durden', number: '443-89-12' },
      { id: 'id-3', name: 'Vincent Vega', number: '645-17-79' },
      { id: 'id-4', name: 'Irene Adler', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

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
