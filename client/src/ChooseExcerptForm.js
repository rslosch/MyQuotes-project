import React, { useState, useContext } from 'react'
// import { useParams } from 'react-router-dom'
import BookExcerptForm from './BookExcerptForm'
import ExcerptOnlyForm from './ExcerptOnlyForm'
import { UserContext } from './context/user'

const ChooseExcerptForm = (/*{addExcerptFlag}*/) => {
    // const params = useParams()
    const { books, addExcerpt } = useContext(UserContext)
    // const [form, setForm] = useState({
    //     quote: "",
    //     context: "",
    //     page: "",
    //     bookId: "new"
    // })

    const [form, setForm] = useState({
        bookId: "new"
    })


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }

    const renderForm = (form.bookId === "new" ? <BookExcerptForm parentBookId={form.bookId}/> : <ExcerptOnlyForm parentBookId={form.bookId} />)

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     console.log("form", form)
    //     console.log("Event Target", e.target)
    //     console.log("Select value?", e.target.books_dropdown.value)

    //     if (form.bookId === "new") {
    //         console.log("Hello World")
    //     } else {
    //         addExcerpt(form)
    //     }}

    return (
        <>
            <label htmlFor="books_dropdown"> Which Book is the Excerpt from? </label>
            <select name="books_dropdown" id="bookId" onChange={handleChange}>
                <option id="newBook" value="new">New Book</option>
                { books.map(book => {
                    return (
                        <option key={book.id} id={book.id} value={book.id}>
                            {book.title}
                        </option>
                    )
                })}
            </select>
            <br />
        {renderForm}
        </>
    )
}

export default ChooseExcerptForm