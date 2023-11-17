import { useContext, useEffect, useState } from 'react'
import UserPreferencesContext from '../../context/UserPreferencesContext.jsx'
import axios from 'axios'
import './theme.css'

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
    <div className='theme-container'>
      <button className='switchToDark' onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}{' '}
      </button>

      <div className='user-profile'>
        <img className='avatar'
          src={user.avatar}
          alt=''
        />
        <div className='child-container'>
           <label className='label'>Name:</label>
           <label className='label-content' >{user.name}</label>
        </div>
        
        <div className='child-container'>
        <p className='label'> Role : </p> 
        <p className='label-content'> {user.role}</p>
        </div>

         <div className='child-container'>
         <p className='label'>Email: </p>   
          <p className='label-content'>{user.email}</p> 
         </div>  
      </div>

    </div>
  )
}

export default Theme
