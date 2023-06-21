import { useEffect } from 'react';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.app}>
      <h1 className={css.appTitle}>Phonebook</h1>

      <ContactForm />

      <h2 className={css.title}>Contacts:</h2>

      <Filter />

      {isLoading && <p className={css.info}>Loading...</p>}

      {error && <p className={css.info}>{error}</p>}

      {!error && !isLoading && !items.length ? (
        <p className={css.info}>The contact list is empty!</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export { App };
