import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css"

export const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <div className={css.userMenu}>
            <p>Welcome, {user.name}</p>
            <button className={css.button} type="button" onClick={handleLogout}>Log Out</button>
        </div>
    )
}