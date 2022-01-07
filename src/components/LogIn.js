import { useDispatch } from "react-redux";
import { useState } from "react";
import operations from "../redux/auth/auth-operation";
import s from "./Form/Form.module.css";
import { Section } from "./Section/Section";

export default function LogInForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));

    setEmail("");
    setPassword("");
  };

  const handleChange = ({ target: { name, value } }) => {
    //console.log(e.target.value);
    //const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };
  return (
    <Section title="Please log in here">
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="input-email"> Email </label>
        <input
          type="text"
          name="email"
          value={email}
          id="input-email"
          onChange={handleChange}
        />

        <label htmlFor="input-passw"> Password</label>
        <input
          type="text"
          name="password"
          id="input-passw"
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Log in</button>
      </form>
    </Section>
  );
}
