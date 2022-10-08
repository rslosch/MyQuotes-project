import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const Navbar = () => {
  const {user, logout} = useContext(UserContext)

  // const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
    })
    .then(() => {
      logout()
      // navigate('/login')
    })
  }

  if(user){
    return (
      <div>
        <h1> Hello {user.username} </h1>
        <button onClick={logoutUser}>Logout</button>
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
      </div>
    )
  }
}

export default Navbar