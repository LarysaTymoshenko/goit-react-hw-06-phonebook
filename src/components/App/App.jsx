import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
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

  const contacts = useSelector(filterContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const formSubmitHandler = (items) => {
    let newName = contacts.find(elem => elem.name.includes(items));
    if (!newName) {
        // const userId = { id: nanoid() };
      dispatch(actions.addContact([...contacts, ...items]));
    } else {
       alert(`${newName.name} is already in contacts`,);
        return;
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
  // }
  //   const newContact = { id: nanoid(), name, number };
  //   setContacts((contacts) => [newContact, ...contacts]);
  // };

  const onDelete = (id) =>  {
    dispatch(actions.deleteContact(id));
  };
  
  return (
    <>
      <Section title="Phonebook">
        <Form onSubmit={formSubmitHandler}/>
      </Section>
      <Section title="Contact">
          <Filter />
        <ListContacts contacts={contacts} onDelete={onDelete} />
      </Section>
    </>
  );
}
