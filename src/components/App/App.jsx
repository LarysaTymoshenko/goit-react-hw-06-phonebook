import { useDispatch, useSelector } from 'react-redux';
// import { useState, useEffect } from "react";
// import { nanoid } from 'nanoid';
import  actions from '../../redux/contact/contact-actions';
import Form from "../Form/Form";
import Section from "../Section/Section";
import ListContacts from "../ListContacts/ListContacts";
import Filter from "../Filter/Filter";
// import { getFromLS, setInLS } from "../../utilits/localstorage";
import {
  filterContacts,
  getFilter,getContacts
} from '../../redux/contact/contact-selector';

export default function App() {
  const contacts = useSelector(filterContacts)
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();
 
 const onAddContacts = data => {
    let isNewName = contacts.find(elem => elem.name.includes(data.name));

    if (!isNewName) {
      dispatch(actions.addContact([...contacts,  ...data]));
    } else {
      alert(`${isNewName} and  is already in contacts`);
      return;
    }
  };
 
  const onDelete = (id) =>  {
    dispatch(actions.deleteContact(id));
  };
  
  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={onAddContacts}/>
      </Section>
      <Section title="Contact">
          <Filter/>
        <ListContacts contacts={contacts} onDelete={onDelete} />
      </Section>
    </>
  );
}
