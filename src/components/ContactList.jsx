import React from 'react';
import PropTypes from 'prop-types';
import { ContactsList, ContactsItem, DeleteButton } from './App.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
            <ContactsList>
                {contacts.map(contact => (
                    <ContactsItem key={contact.id}>
                        {`${contact.name} : ${contact.number}`}
                        {
                            <DeleteButton
                                type="button"
                                name="delete"
                                onClick={() => onDeleteContact(contact.id)}
                            >
                                delete
                            </DeleteButton>
                        }
                    </ContactsItem>
                ))}
            </ContactsList>
    )
};;

ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}

export default ContactList;