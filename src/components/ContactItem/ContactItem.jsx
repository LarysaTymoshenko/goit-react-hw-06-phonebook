 import PropTypes from "prop-types";
import { useDispatch } from 'react-redux';
import  actions from '../../redux/contact/contact-actions';
import s from "./ContactItem.module.css";

function ContactItem({ id, name, number }) {
  const dispatch = useDispatch();
 
  return (
    <li key={id} >
      <span className={s.itemText}>{name}</span>
      <span className={s.itemText}>{number}</span>
      <button
        type="button"
        className={s.button}
         data-id={id}
        onClick={() => {dispatch(actions.deleteContact(id))}}
      >
        Delete
      </button>
   </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  
};

export default ContactItem;