import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  filterContacts
} from '../../redux/contact/contact-selector';
import ContactItem from "../ContactItem/ContactItem";
import s from "./ListContact.module.css";


const ListContacts = () => {
  const contacts = useSelector(filterContacts);
 
  return (
      <ul>
      {contacts.map(({ id, name, number }) => (
            <ContactItem
            key={id}
            className={s.item}
            name={name}
            number={number}
            />
        ))}
      </ul>
  
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
 
};

 export default ListContacts;
