import AppBar from "./components/AppBar";
import { connect } from "react-redux";
//import { addContact } from "./redux/contacts-actions";
import ContactsView from "./views/ContactsView";
import Home from "./views/Home";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import operations from "./redux/auth/auth-operation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { css } from "@emotion/react";

import { useSelector } from "react-redux";
import { isFetchingUser, checkToken } from "./redux/auth/auth-selector";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <AppBar />

      <Suspense fallback={<ClipLoader css={override} size={200} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Routes>
      </Suspense>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
// });

// export default connect(null, mapDispatchToProps)(App);

export { App };
