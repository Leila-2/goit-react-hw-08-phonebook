import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/auth/auth-operation";
import { getUsername } from "../../redux/auth/auth-selector";
import defaultAvatar from "./default-avatar.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const avatar = defaultAvatar;
  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span>Добро пожаловать,{name}!</span>
      <button type="button" onClick={() => dispatch(operations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
