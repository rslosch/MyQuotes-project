import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const EditBookForm = ({editBookFlag}) => {
    const { updateBook, currentBook } = useContext(UserContext)
    const [author, setAuthor] = useState(currentBook.author)
    const [title, setTitle] = useState(currentBook.title)

    const handleSubmit = (e) => {
        e.preventDefault()
        updateBook(currentBook.id,{
            author: author,
            title: title
        })
        setAuthor(currentBook.author)
        setTitle(currentBook.title) //Fix
        editBookFlag()
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

export default EditBookForm