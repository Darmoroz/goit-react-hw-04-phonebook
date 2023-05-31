import { nanoid } from 'nanoid';
import { Section, NewContactForm, ContactsList, Filter } from 'components';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleSubmit = newContact => {
    const { name, number } = newContact;

    const user = {
      id: nanoid(),
      name,
      number,
    };
    const isFindContact = contacts.some(contact => {
      return contact.name === name;
    });
    if (isFindContact) {
      alert(`${name} is already in contacts`);
      return true;
    }
    setContacts(contacts => {
      return [...contacts, user];
    });
  };

  const handleDelete = id => {
    setContacts(contacts => {
      return contacts.filter(contact => contact.id !== id);
    });
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const filterContacts = () => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase().trim());
      });
    }
  };

  return (
    <>
      <Section title="Phonebook">
        <NewContactForm onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={handleChange} value={filter} />
        <ContactsList contacts={filterContacts()} onDelete={handleDelete} />
      </Section>
    </>
  );
};
