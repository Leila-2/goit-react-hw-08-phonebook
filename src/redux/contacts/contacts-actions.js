import { createAction } from "@reduxjs/toolkit";
//import { nanoid } from "nanoid";

export const fetchContactsRequest = createAction("todos/fetchContactsRequest");
export const fetchContactsSuccess = createAction("todos/fetchContactsSuccess");
export const fetchContactsError = createAction("todos/fetchContactsError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

// export const addContact = createAction("contacts/add", ({ name, number }) => ({
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// }));

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");
export const changeFilter = createAction("contacts/changeFilter");
export const clearFilter = createAction("contacts/clearFilter");
