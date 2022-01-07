import { Section } from "../components/Section/Section";
import Form from "../components/Form/Form";
import Filter from "../components/Filter/Filter";
import Contacts from "../components/Contacts/Contacts";

export default function () {
  return (
    <Section>
      <Form />
      <Filter />
      <Contacts />
    </Section>
  );
}
