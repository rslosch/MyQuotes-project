import React, { useState, useEffect } from 'react'

//Create the context object
const UserContext = React.createContext()

//Create the context provider component
function UserProvider({ children }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    

    return (
        <UserContext.Provider value = {{user}}>
            {children}
        </UserContext.Provider>
    )
}

//export
export { UserContext, UserProvider }