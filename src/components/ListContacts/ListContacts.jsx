import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import deleteActions from "../../redux/contact/contact-actions";
import ContactItem from "../ContactItem/ContactItem";
import s from "./ListContact.module.css";

const ListContacts = ({ contacts = [], onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem
              className={s.item}
              name={name}
              id={id}
              number={number}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
ListContacts.propTypes = {
  listContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
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

// const mapStateToProps = state => ({ contacts: state.contacts.items });
const mapDispatchToProps = dispatch => ({
 onDelete: (id) => dispatch(deleteActions.deleteContact(id)),
})
export default connect( mapStateToProps,mapDispatchToProps)(ListContacts);
