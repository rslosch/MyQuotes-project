import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'

const ExcerptOnlyForm = ({parentBookId, paramBookId}) => {

    const { addExcerpt } = useContext(UserContext)
    const [form, setForm] = useState({
        quote: "",
        context: "",
        page: "",
        book_id: parentBookId || paramBookId
    })
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log("form", form)
        console.log("Event Target", e.target)
            addExcerpt(form)
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

export default ExcerptOnlyForm