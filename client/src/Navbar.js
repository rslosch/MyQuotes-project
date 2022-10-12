import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const Navbar = () => {
  const {user, logout, loggedIn} = useContext(UserContext)

  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
    })
    .then(() => {
      logout()
      navigate('/')
    })
  }

  if(loggedIn){
    return (
      <div>
        <h1> Hello {user.username} </h1>
        <button onClick={logoutUser}>Logout</button>
        <hr/>
      </div>
    )
  } else {
    return (
      <div>
        <NavLink to='/login'>
          <button>Login</button>  
        </NavLink>
        <NavLink to='/signup'>
          <button>Signup</button>  
        </NavLink>
        <hr/>
      </div>
    )
  }
}

export default Navbar