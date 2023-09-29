import React, { Component } from 'react';
import {
  ContactFormContainer,
  Form,
  Label,
  Input,
  SubmitButton,
} from './ContactForm.styles';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <ContactFormContainer>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name:
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
          </Label>
          <Label>
            Phone Number:
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
              placeholder="Phone Number"
            />
          </Label>
          <SubmitButton type="submit">Add Contact</SubmitButton>
        </Form>
      </ContactFormContainer>
    );
  }
}

export default ContactForm;
