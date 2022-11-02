import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const EditBookForm = ({editBookFlag}) => {
    const { updateBook, currentBook, fetchBooks, books } = useContext(UserContext)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchBooks()
    },[])

    const currBook = books.find(book => book.id == id)
    const [author, setAuthor] = useState(currBook.author)
    const [title, setTitle] = useState(currBook.title)

    const handleSubmit = (e) => {
        e.preventDefault()
        updateBook(currentBook.id,{
            author: author,
            title: title
        })
        console.log("book title in state" + title)
        console.log("current book title " , currBook.title)
        navigate(`/books/${id}`)
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
        <input type="submit" value="Save Changes"/>
    </form>
  )
}

export default EditBookForm