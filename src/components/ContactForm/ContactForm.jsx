import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from 'Redux/operations';
import { selectContacts } from 'Redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { showNotifyReport } from 'js/notifyFunc';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = useRef(nanoid());
  const numberInputId = useRef(nanoid());

  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    items.some(
      ({ name: contactName }) =>
        contactName.toLowerCase() === name.toLowerCase()
    )
      ? showNotifyReport(`${name} is already in contact`, 'reportWarning')
      : dispatch(addContact({ id: nanoid(), name, phone: number }));

      reset();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={nameInputId.current} className={css.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        id={nameInputId.current}
        pattern="^[A-Za-z\u0080-\uFFFF\- ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.input}
        onChange={handleChange}
        value={name}
      />

      <label htmlFor={numberInputId.current} className={css.label}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        id={numberInputId.current}
        pattern="^(\+?[0-9.\(\)\-\s]*)$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.input}
        onChange={handleChange}
        value={number}
      />

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
