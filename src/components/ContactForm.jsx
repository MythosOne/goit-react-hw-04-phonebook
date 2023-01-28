import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, AddButton, Input } from './App.styled';

export class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };

    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onAddContact({ ...this.state });
        
        this.setState({ name: "", number: "" });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    Name
                    <Input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
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
                        value={this.state.number}
                        onChange={this.handleChange}
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
};

export default ContactForm