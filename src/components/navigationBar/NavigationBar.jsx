import { useContext, useState } from 'react'
import './navigationBar.css'
import UserPreferencesContext from '../../context/UserPreferencesContext.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.jsx'

const ThemeSlider = () => {
  const { theme, toggleTheme } = useContext(UserPreferencesContext)
  const [isToggled, setIsToggled] = useState(theme === 'dark')

  const handleToggle = () => {
    setIsToggled(!isToggled)
    toggleTheme()
  }

  return (
    <div
      className={`slider-container ${isToggled ? 'dark' : 'light'}`}
      onClick={handleToggle}>
      <div className='slider-button'></div>
    </div>
  )
}

const NavigationBar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <nav className='navbar'>
      <div className='recipePlatform'>Recipe Platform</div>
      <Link
        to='/'
        className='label'>
        Home
      </Link>
      <Link
        to='/new-recipe'
        className='label'>
        Add Recipe
      </Link>
      <Link
        to='/settings'
        className='label'>
        Settings
      </Link>
      <button
        className='loginButton'
        onClick={isAuthenticated ? handleLogout : handleLogin}>
        {isAuthenticated ? 'Logout' : 'Login'}{' '}
      </button>
      <ThemeSlider />
    </nav>
  )
}

export default NavigationBar
