import React, { useContext } from 'react'
import { UserContext } from './context/user'
import Signup from './Signup'

const Home = () => {
    const  { user } = useContext(UserContext)

    if(!user || user.error){
        return <Signup />
    } else {
        return (
            <div>
                <h1>{user.username} Home </h1>
            </div>
        )
     }
}

export default Home