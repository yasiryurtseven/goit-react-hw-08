import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const Login = () => {
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(login({ email, password }));
    form.reset();
  }

  return (
    <div className={css.container}>
      <h2>Hesabına Giriş Yap</h2>
      
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input className={css.input} type="email" name="email" required placeholder="example@mail.com" autoComplete="username" />
        </label>
        
        <label className={css.label}>
          Password
          <input className={css.input} type="password" name="password" required placeholder="Enter your password" autoComplete="current-password" />
        </label>

        <button className={css.button} type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;