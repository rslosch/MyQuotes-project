import React, { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from './context/user'

const EditExcerptForm = () => {

    const { excerpts, updateExcerpt } = useContext(UserContext)
    const {id} = useParams()
    const currExcerpt = excerpts.find(e => e.id == id)
    const [form, setForm] = useState({
        quote: currExcerpt.quote,
        context: currExcerpt.context,
        page: currExcerpt.page,
        // book_id: currExcerpt.book.id
    })
    const navigate = useNavigate()
    console.log("excerpts", excerpts)
    console.log("this excerpts", excerpts.find(e => e.id == id))
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateExcerpt(id, form)
            navigate(`/excerpts`)
    }

   return (
    <form onSubmit={handleSubmit}>
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

export default EditExcerptForm