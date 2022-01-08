import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../redux/auth/auth-selector";

export function RequireAuth({ children, redirectTo = "/" }) {
  const isAuth = useSelector(getIsLoggedIn);

  return isAuth ? children : <Navigate to={redirectTo} />;
}

export function GeneralAccess({ children, redirectTo = "/" }) {
  const isAuth = useSelector(getIsLoggedIn);

  return isAuth ? <Navigate to={redirectTo} /> : children;
}
