import ContactItem from '../ContactItem';
import css from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'Redux/selectors';

const ContactList = () => {
  const { items } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <ul className={css.contactList}>
      {items
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, phone: number }) => (
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
