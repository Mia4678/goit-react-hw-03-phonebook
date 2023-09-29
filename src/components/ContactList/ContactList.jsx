import React, { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { ContactListContainer } from './ContactList.styles';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ContactListContainer>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ContactListContainer>
    );
  }
}

export default ContactList;
