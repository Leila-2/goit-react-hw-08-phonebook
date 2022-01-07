import AppBar from "./components/AppBar";
import { connect } from "react-redux";
import { addContact } from "./redux/contacts-actions";
import ContactsView from "./views/ContactsView";
import Home from "./views/Home";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ name, number }) => dispatch(addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(App);

export { App };
