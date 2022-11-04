import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const BookExcerptForm = () => {
    const navigate = useNavigate()
    const { addBook, addExcerpt } = useContext(UserContext)
    const [form, setForm] = useState({
        author: "",
        title: "",
        quote: "",
        context: "",
        page: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form", form)
        addBook(form)
        navigate('/excerpts')
    }
 
  return (
    <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
            type="text"
            id="title"
            value={form.title}
            onChange={handleChange}
        /> <br/>
        <label>Author: </label>
        <input 
            type="text"
            id='author'
            value={form.author}
            onChange={handleChange}
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