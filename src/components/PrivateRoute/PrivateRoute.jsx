import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = "/"}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);

    if (isRefreshing) return <strong>Loading...</strong>;

    return isLoggedIn ? <Component /> : <Navigate to={redirectTo} /> };