import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from "react-router-dom"; 
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { RestrictedRoute } from "./components/ResrictedRoute/ResrictedRoute.jsx";  
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout/Layout.jsx'; 
import './App.css'; 

const HomePage = lazy(() => import("./pages/Home/Home.jsx"));
const RegisterPage = lazy(() => import("./pages/Registiration/Registiration.jsx"));
const LoginPage = lazy(() => import("./pages/Login/Login.jsx"));
const ContactsPage = lazy(() => import("./pages/Contacts/Contacts.jsx"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Refreshing user data...</strong>
  ) : (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          
          <Route 
            path='/register' 
            element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts" />} 
          />
          <Route 
            path='/login' 
            element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} 
          />
          
          <Route 
            path='/contacts' 
            element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} 
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;