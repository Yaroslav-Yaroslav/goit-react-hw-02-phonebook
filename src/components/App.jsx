import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Yar', number: '111-22-33', id: '1' },
      { name: 'Yar1', number: '123-12-34', id: '2' },
    ],
    filter: '',
  };
  addContact = newContact =>
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  filterContacts = e => {
    this.setState({
      filter: e.target.value,
      contacts: this.state.contacts.filter(({ name }) =>
        name.includes(e.target.value)
      ),
    });
    const filteredContacts = this.state.contacts.filter(({ name }) =>
      name.includes(e.target.value)
    );
    console.log('filteredContacts:', filteredContacts);
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.filterContacts} value={filter} />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
