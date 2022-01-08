import { Section } from "../components/Section/Section";
import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import Contacts from "../components/Contacts/Contacts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/contacts-operations";

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Section>
      <Form />
      <Filter />
      <Contacts />
    </Section>
  );
}
