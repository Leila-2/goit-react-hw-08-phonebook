import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import contactsReduser from "./contacts/contacts-reduser";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authreducer from "./auth/auth-slice";

// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import logger from "redux-logger";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({
//     contacts: contactsReduser,
//   })
// );

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authreducer),
    contacts: contactsReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //logger,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);
const myStore = { store, persistor };
export default myStore;
