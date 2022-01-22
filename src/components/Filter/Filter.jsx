import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { getFilter } from '../../redux/contact/contact-selector';
import actions from '../../redux/contact/contact-actions';
import s from "./Filter.module.css";

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label htmlFor="name" className={s.label}>
      Find contact by name
      <input
        type="text"
        name="filter"
        className={s.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
         onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
   onChange: PropTypes.func.isRequired,
};

export default Filter;
