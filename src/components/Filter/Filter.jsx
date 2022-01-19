import PropTypes from "prop-types";
import { connect } from 'react-redux';
import FilterActions from "../../redux/contact/contact-actions";
import s from "./Filter.module.css";

function Filter({ value, onChange}) {
  return (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        name="name"
        className={s.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={value}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
       
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

 const mapStateToProps = (state) => ({ value: state.contacts.filter });

// const getContact = (allContacts, filter) => {
//   // const allContacts = { contacts: state.contacts.items.name };
//   const normalFilter = filter.toLowerCase();
//   return allContacts.filter(({ contact }) => contact.toLowerCase().includes(normalFilter));
// };
// const mapStateToProps = ({ contacts: { items:{name}, filter } }) => ({
//   contacts: getContact(name, filter),
// });
const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch( FilterActions.changeFilter(e.target.value)),
})

export default connect( mapStateToProps,mapDispatchToProps)(Filter);
