import React, { useContext } from 'react'
import { UserContext } from './context/user'
import { useNavigate, NavLink } from 'react-router-dom'
import Signup from './Signup'

const Home = () => {
    const  { user, loggedIn } = useContext(UserContext)
    // const navigate = useNavigate()

    if(!loggedIn){
        return (
            // <Signup />
            <h1> Please Login or Signup </h1>
            // navigate("/signup")
        )
    } else {
        return (
            <div>
                <h1>{user.username} Home </h1>
            </div>
        )
     }
}

export default Home