import { useEffect, lazy, Suspense} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom" 
import { PrivateRoute } from "./components/UserMenu/PrivateRoute"
import { RestrictedRoute } from "./components/UserMenu/ResrictedRoute"  
import { selectIsRefreshing } from './redux/auth/selectors'
import { refreshUser } from './redux/auth/operations'
import './App.css' 


const HomePage = lazy(() => import("./pages/Home/Home.jsx"))
const RegisterPage = lazy(() => import("./pages/Registiration/Registiration.jsx"))
const LoginPage = lazy(() => import("./pages/Login/Login.jsx"))
const ContactsPage = lazy(() => import("./pages/Contacts/Contacts.jsx"))

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)
  
 useEffect(() => {
    dispatch(refreshUser());
 }, [dispatch])
 


  return isRefreshing ? (
    <strong>Refreshing user data...</strong>
  ) : (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Herkese açık rota */}
          <Route path='/' element={<HomePage />} />
          
          {/* Giriş yapmış adamın işi olmayan kısıtlı rotalar */}
          <Route 
            path='/register' 
            element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts" />} 
          />
          <Route 
            path='/login' 
            element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} 
          />
          
          {/* Sadece giriş yapanların girebileceği özel rehber rotası */}
          <Route 
            path='/contacts' 
            element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} 
          />
        </Routes>
      </Suspense>
    </div>
  )
}



export default App
