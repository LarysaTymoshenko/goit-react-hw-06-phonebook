// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import  actions from '../../redux/contact/contact-actions';
import Form from "../Form/Form";
import Section from "../Section/Section";
import ListContacts from "../ListContacts/ListContacts";
import Filter from "../Filter/Filter";
// import { getFromLS, setInLS } from "../../utilits/localstorage";
import {
  filterContacts,
  getFilter,
} from '../../redux/contact/contact-selector';

export default function App() {
  // const [contacts, setContacts] = useState(getFromLS("contacts"));
// const [filter, setFilter] = useState("");
  const contacts = useSelector(filterContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formSubmitHandler = data => {
    let newName = contacts.find(elem => elem.name.includes(data.name));
     if (!newName) {
      dispatch(actions.addContact([...contacts, {...data }]));
    } else {
      alert(`${newName.name} is already in contacts`,);
    }
  }
  // const onCheckContact = (value) => {
  //   return contacts.find((el) => el.name.toUpperCase() === value.toUpperCase());
  // };

  // const onAddContact = (name, number) => {
  //   if (onCheckContact(name)) {
  //     alert(`${name} and  is already in contacts`);
  //     return;
  //   }
  //   const newContact = { id: nanoid(), name, number };
  //   setContacts((contacts) => [newContact, ...contacts]);
  // };

  const onDelete = (id) =>  {
    dispatch(actions.deleteContact(id));
  };
   const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(actions.changeFilter(value));
  };


  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler}/>
      </Section>
      <Section title="Contact">
          <Filter value={filter} onChange={handleChange}/>
        <ListContacts contacts={contacts} onDelete={onDelete} />
      </Section>
    </>
  );
}
