import React, { useContext } from 'react'
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom'
import Signup from './Signup'

const Home = () => {
    const  { user } = useContext(UserContext)
    // const navigate = useNavigate()

    if(!user || user.error){
        return (
            <Signup />
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