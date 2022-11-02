import React, { useState, useContext } from 'react'
import { UserContext } from './context/user'

const BookExcerptForm = ({parentBookId}) => {
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")
    const { addBook } = useContext(UserContext)
    const [form, setForm] = useState({
        quote: "",
        context: "",
        page: "",
        bookId: parentBookId
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
        console.log("BookID", form.bookId)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addBook({
            author: author,
            title: title
        })
        setAuthor("")
        setTitle("")
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
        />
        <br />
        <label>Quote: </label>
        <input
            type="text"
            id="quote"
            value={form.quote}
            onChange={handleChange}
        /> <br/>
        <label>Context: </label>
        <input 
            type="text"
            id='context'
            value={form.context}
            onChange={handleChange}
        /> <br/>
        <label>Page Number: </label>
        <input 
            type="number"
            id='page'
            value={form.page}
            onChange={handleChange}
        /> <br/>
        <input type="submit"/>
    </form>
  )
}

export default BookExcerptForm