import React, { useState, useContext } from 'react'
import BookForm from './BookForm'
import Book from './Book'
import EditBookForm from './EditBookForm'
import { Link } from 'react-router-dom'
import { UserContext } from './context/user'

const Books = () => {

    const { loggedIn, books } = useContext(UserContext)
    
    if (loggedIn) {
        const booksList = books.map(b => {
            return (
                <li key={b.id}>{b.title}: {b.author}</li>
            )
        })   
        return (
            <div>
                <h1>Library of all Books </h1>
                <br/>
                {booksList}
                <br/>
            </div>
        )
    } else {
        return (
            <h3> Not Authorized - Please Signup or Login</h3>
        )
    }
}

export default Books  