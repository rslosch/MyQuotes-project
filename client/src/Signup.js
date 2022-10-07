import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label> Username: </label>
            <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /> <br />
            <label> Password: </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /> <br />
            <label> Confirm Password: </label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            /> <br />
            <input type="submit" />
        </form>
        <ul>
            {errorsList}
        </ul>
    </div>
  )
}

export default Signup