import { useContext, useEffect, useState } from 'react'
import UserPreferencesContext from '../../context/UserPreferencesContext.jsx'
import axios from 'axios'

const Theme = () => {
  const { theme, toggleTheme } = useContext(UserPreferencesContext)

  const [user, setUser] = useState({})

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios
        .get('https://api.escuelajs.co/api/v1/auth/profile', {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem('user')).access_token
            }`
          }
        })
        .then((response) => setUser(response.data))
    }

    getUserProfile()
  }, [])

  return (
    <div>
      <label>Theme</label>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}{' '}
      </button>

      <div className='user-profile'>
        <img
          src={user.avatar}
          alt=''
        />
        <p>{user.name}</p>
        <p>{user.role}</p>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

export default Theme
