import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const BookForm = ({addBookFlag}) => {
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const { addBook } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook({
            author: author,
            title: title
        })
        setAuthor("")
        setTitle("")
        addBookFlag()
    }
 
  return (
    <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
        /> <br/>
        <label>Author: </label>
        <input 
            type="text"
            id='author'
            value={author}
            onChange={e => setAuthor(e.target.value)}
        /> <br/>
        <input type="submit"/>
    </form>
  )
}

export default BookForm