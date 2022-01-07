import { useDispatch } from "react-redux";
import { useState } from "react";
import operations from "../redux/auth/auth-operation";
import s from "./Form/Form.module.css";
import { Section } from "./Section/Section";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
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
    <div>
      <Section title="Please register here">
        <form onSubmit={handleSubmit} className={s.form}>
          <label htmlFor="input-name"> Name </label>
          <input
            type="text"
            id="input-name"
            name="name"
            value={name}
            onChange={handleChange}
          />

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

          <button type="submit">Register</button>
        </form>
      </Section>
    </div>
  );
}
