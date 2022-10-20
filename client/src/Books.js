import React, { useState, useContext } from 'react'
import BookForm from './BookForm'
import Book from './Book'
import { Route, useParams, Link } from 'react-router-dom'
import { UserContext } from './context/user'

const Books = () => {

    const { loggedIn, books, deleteBook, showBook } = useContext(UserContext)
    const [formFlag, setFormFlag] = useState(false)
    const params = useParams()

    const addBookFlag = () => {
        setFormFlag(false)
    }
    
    if (loggedIn) {
        const booksList = books.map(b => {
            return (
                <Link to={`/books/${b.id}`} key={b.id}>
                    <li>{b.title}: {b.author}</li>
                    <button id={b.id} onClick={(e) => deleteBook(e.target.id)}> Delete </button>
                </Link>
            )
        })   
        return (
            <div>
                <h1>Books </h1>
                <br/>
                {booksList}
                <br/>
                {formFlag ?
                    <BookForm addBookFlag={addBookFlag} />
                    :
                    <button onClick={() => setFormFlag(true)}>Add Book</button>
                }
            </div>

            
        )
    } else {
        return (
            <h3> Not Authorized - Please Signup or Login</h3>
        )
    }
}

export default Books  