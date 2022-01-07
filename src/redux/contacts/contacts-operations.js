import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from "./contacts-actions";
import axios from "axios";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest);

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

// // POST @ /contacts
export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = { name, number };
    dispatch(addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error.message)));
  };

// DELETE @ /contacts/:id
export const deleteContact = (contactId) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};
