 import PropTypes from "prop-types";
import s from "./ContactItem.module.css";

function ContactItem({ name, number,onDeleteContact }) {
  return (
    <li>
      <span className={s.itemText}>{name}</span>
      <span className={s.itemText}>{number}</span>
      <button
        type="button"
        className={s.button}
        onClick={onDeleteContact}
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