import React, { useState, useContext } from 'react'
import BookForm from './BookForm'
import Book from './Book'
import EditBookForm from './EditBookForm'
import { Link } from 'react-router-dom'
import { UserContext } from './context/user'

const Books = () => {

    const { loggedIn, books, deleteBook, showBook} = useContext(UserContext)
    const [formFlag, setFormFlag] = useState(false)
    const [editFormFlag, setEditFormFlag] = useState(false)

    const addBookFlag = () => {
        setFormFlag(false)
    }

    const editBookFlag = () => {
        setEditFormFlag(false)
    }

    const handleEditClick = (id) => {
        setEditFormFlag(true)
        showBook(id)
    }
    
    if (loggedIn) {
        const booksList = books.map(b => {
            return (
                <>
                    <Link to={`/books/${b.id}`} key={b.id}>
                        <li>{b.title}: {b.author}</li>
                    </Link>
                    <button id={b.id} onClick={(e) => handleEditClick(b.id)}> Edit </button>
                    <button id={b.id} onClick={(e) => deleteBook(e.target.id)}> Delete </button>
                </>
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
                <br />
                {editFormFlag ?
                    <EditBookForm editBookFlag={editBookFlag} />
                    :
                    null
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