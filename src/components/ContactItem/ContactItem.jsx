import PropTypes from "prop-types";
import { connect } from 'react-redux';
import s from "./ContactItem.module.css";

function ContactItem({ id, name, number, onDelete }) {
  return (
    <>
      <span className={s.itemText}>{name}</span>
      <span className={s.itemText}>{number}</span>
      <button
        type="button"
        className={s.button}
        data-id={id}
        onClick={() => {
        onDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};


const getVisibleContact = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContact(items, filter),
});
export default connect(mapStateToProps)(ContactItem);
// export default ContactItem;