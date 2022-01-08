import { useSelector } from "react-redux";
import React from "react";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu/UserMenu";
import { getIsLoggedIn } from "../redux/auth/auth-selector";

//console.log(getIsLoggedIn)
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  // console.log(isLoggedIn)
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
