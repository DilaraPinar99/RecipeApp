import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'
import image from '../../assets/recipeBackground.jpg'
import './login.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      navigate('/')
    } catch (error) {
      alert('Login failed!')
    }
  }

  return (
    <div className='login-background'>
      <img src={image} className='background-img'/>
    <div className='login-form'>
      <form onSubmit={handleLogin}>
        <label className='labelEmail'> EMail:  </label>
        <input className='inputs'
          type='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className='labelPassword'> Password:  </label>
        <input className='inputs'
          type='password'
          placeholder='********'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='' type='submit'>Login</button>
      </form>
    </div>
    </div>
    
  )
}

export default Login
