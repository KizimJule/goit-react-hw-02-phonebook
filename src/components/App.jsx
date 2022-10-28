import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    console.log(name);
    if (this.state.contacts.some(e => e.name === name)) {
      // this.setState(prevState => ({
      //  return {contacts: [contact, ...prevState.contacts],}
      // }));
      return alert(`${name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => {
        return {
          contacts: [contact, ...contacts],
        };
      });
    }

    // this.setState(prevState => ({
    //   contacts: [contact, ...prevState.contacts],
    // }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
    return filterContactsList;
  };

  filterList = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          gap: 20,
        }}
      >
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.filterList} />
          <ContactList
            contacts={this.getFilteredContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}
