import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section, NewContactForm, ContactsList, Filter } from 'components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Larry Copeland', number: '287-91-26' },
    ],
    filter: '',
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleSubmit = state => {
    const { name, number } = state;

    const user = {
      id: nanoid(),
      name,
      number,
    };
    const findEl = this.state.contacts.some(contact => {
      return contact.name === name;
    });
    if (findEl) {
      alert(`${name} is already in contacts`);
      return true;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, user] };
    });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return [...this.state.contacts];
    } else {
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
      });
    }
  };

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value,
    });
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <NewContactForm onSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.handleChange} value={filter} />
          <ContactsList
            contacts={this.filterContacts()}
            onDelete={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}
