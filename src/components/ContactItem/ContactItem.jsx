import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contactsSlice';

const ContactItem = ({ name, number, contactId }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <div>
        <p className={css.caption}>Name: {name}</p>
        <p className={css.caption}>Number: {number}</p>
      </div>

      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(deleteContact(contactId))}
      >
        <FaTrash />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  contactId: PropTypes.string.isRequired
};

export default ContactItem;
