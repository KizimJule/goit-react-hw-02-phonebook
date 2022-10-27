import React from 'react';
import propTypes from 'prop-types';
import { ContactListUl, ContactListLi } from './ContactList.styled';

export const ContactList = ({ contacts }) => (
  <ContactListUl>
    {contacts.map((contact, id) => (
      <ContactListLi key={id}>
        {contact.name}: {contact.number}
      </ContactListLi>
    ))}
  </ContactListUl>
);
ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
