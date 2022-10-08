import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method : "POST",
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => res.json())
        .then(user => {
            if(!user.errors) {
                signup(user)
                navigate('/')
            } else {
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
                const erorrLis = user.errors.map(error => <li key={error.id}> {error} </li>)
                setErrorsList(erorrLis)
            }
        })
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