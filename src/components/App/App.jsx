import { useState, useEffect } from "react";
import Form from "../Form/Form";
import Section from "../Section/Section";
import ListContacts from "../ListContacts/ListContacts";
import Filter from "../Filter/Filter";
import { getFromLS, setInLS } from "../../utilits/localstorage";

export default function App() {
  const [contacts, setContacts] = useState(getFromLS("contacts"));
const [filter, setFilter] = useState("");

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

  // const onDeleteContacts = (id) => {
  //   setContacts((prevState) => ({
  //     contacts: prevState.contacts.filter((el) => el.id !== id),
  //   }));
  // };

// const getfilter = ({ filter, items }) => {
//     const normalizeFilter = contacts.filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter),
//     );
//   };
 

  useEffect(() => {
    setInLS("contacts", contacts);
  }, [contacts]);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contact">
          <Filter/>
        <ListContacts  />
      </Section>
    </>
  );
}
