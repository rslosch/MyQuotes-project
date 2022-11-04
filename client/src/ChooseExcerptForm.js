import React, { useState, useContext } from 'react'
import BookExcerptForm from './BookExcerptForm'
import ExcerptOnlyForm from './ExcerptOnlyForm'
import { UserContext } from './context/user'

const ChooseExcerptForm = () => {
    const { books } = useContext(UserContext)
    const [form, setForm] = useState({
        bookId: "new"
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }

    const renderForm = (form.bookId === "new" ? <BookExcerptForm /> : <ExcerptOnlyForm parentBookId={form.bookId} />)

    return (
        <>
            <label htmlFor="books_dropdown"> Which Book is the Quote from? </label>
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