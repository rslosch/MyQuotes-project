import React, { createContext, useState, useEffect } from 'react'

//Create the context object
const UserContext = React.createContext()

//Create the context provider component
function UserProvider({ children }) {

    return (
        <UserContext.Provider value = {{}}>
            {children}
        </UserContext.Provider>
    )
}

//export
export { UserContext, UserProvider }