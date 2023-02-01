import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, AddButton, Input } from './App.styled';

export const ContactForm = ({onAddContact}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        };
    };

    const handleSubmit = event => {
        event.preventDefault();

        onAddContact(name, number);
        setName('');
        setNumber('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Name
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Enter name"
                    required
                />
            </Label>
            <Label>
                Number
                <Input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\d{3}[-]\d{2}[-]\d{2}"
                    title="The phone number must consist of numbers and a dash ###-##-##"
                    placeholder="Enter phone number"
                    required
                />
            </Label>
            <AddButton type='submit'>Add Contact</AddButton>
        </Form>
    );
};

ContactForm.propTypes = {
    onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;