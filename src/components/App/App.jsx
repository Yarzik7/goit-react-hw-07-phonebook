import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'Redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className={css.app}>
      <h1 className={css.appTitle}>Phonebook</h1>

      <ContactForm />

      <h2 className={css.title}>Contacts:</h2>

      <Filter />

      {!contacts.length ? (
        <p className={css.listEmpty}>The contact list is empty!</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export { App };
