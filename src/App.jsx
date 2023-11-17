import './App.css';
import Home from './components/home/Home';
import NavigationBar from './components/navigationBar/NavigationBar';
import NewRecipeForm from './components/newRecipeForm/NewRecipeForm.jsx';
import { useContext } from 'react';
import UserPreferencesContext from './context/UserPreferencesContext.jsx';
import { ApiContextProvider } from './context/ApiContext.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Theme from './components/settings/Theme.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import Login from './components/login/Login.jsx';
import PrivateRoute from './services/PrivateRoute.jsx';


function App() {



  const {theme} = useContext(UserPreferencesContext)

  return (
    <AuthProvider>
      <Router>
      <div className={theme}>
        <NavigationBar />
        <ApiContextProvider>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/new-recipe' element={<PrivateRoute element={<NewRecipeForm />} />} />
            <Route path='/settings' element={<PrivateRoute element={<Theme />}/>} />
          </Routes>
        </ApiContextProvider>
      </div>
      </Router>
    </AuthProvider>
  )
}

export default App
