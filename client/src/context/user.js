import React, { useState, useEffect } from 'react'

//Create the context object
const UserContext = React.createContext()

//Create the context provider component
function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    
    const login = (user) => {
        setUser(user)
    }

    const logout = () => {
        setUser(null)
    }

    const signup = (user) => {
        setUser(user)
    }

    return (
        <UserContext.Provider value = {{user, login, logout, signup}}>
            {children}
        </UserContext.Provider>
    )
}

//export
export { UserContext, UserProvider }