import ContactItem from '../ContactItem';
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'Redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <ul className={css.contactList}>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            contactId={id}
          />
        ))}
    </ul>
  );
};

export default ContactList;
