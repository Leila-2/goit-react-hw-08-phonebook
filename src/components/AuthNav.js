import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  active: {
    color: "#E84A5F",
    fontWeight: 20,
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        //style={styles.link}
        className="link"
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        //style={styles.link}
        className="link"
      >
        Логин
      </NavLink>
    </div>
  );
}
