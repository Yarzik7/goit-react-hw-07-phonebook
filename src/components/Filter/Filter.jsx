import { useRef } from 'react';
import css from './Filter.module.css'
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'Redux/filterSlice';
import { selectFilter } from 'Redux/selectors';

const Filter = () => {
  const filterInputId = useRef(nanoid());

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => dispatch(changeFilter(value));

  return (
    <div className={css.filterBox}>
      <label htmlFor={filterInputId.current} className={css.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        id={filterInputId.current}
        pattern="^[A-Za-z\u0080-\uFFFF\- ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.input}
        onChange={handleChangeFilter}
        value={filter}
      />
    </div>
  );
};

export default Filter;
