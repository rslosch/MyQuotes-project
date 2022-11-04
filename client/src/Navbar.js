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
        <h1> {user.username} is logged in</h1>
        <NavLink to='/'>
          <button>Home</button>  
        </NavLink>
        <NavLink to='/excerpts'>
          <button>My Excerpts</button>  
        </NavLink>
        <NavLink to='/books'>
          <button>Book Library</button>  
        </NavLink>
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