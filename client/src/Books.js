import React, { useState, useContext } from 'react'
import BookForm from './BookForm'
import { Route, useParams } from 'react-router-dom'
import { UserContext } from './context/user'

const Books = () => {

    const { loggedIn, books } = useContext(UserContext)
    const params = useParams()
    
    if (loggedIn) {
        const booksList = books.map(b => <li key={b.id} >{b.title}</li>)
        return (
            <div>
                <h1>Books </h1>
                <br/>
                {booksList}
            </div>

            
        )
    } else {
        return (
            <h3> Not Authorized - Please Signup or Login</h3>
        )
    }
}

export default Books  