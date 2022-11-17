import React, { useState, useContext } from 'react'
import BookExcerptForm from './BookExcerptForm'
import ExcerptOnlyForm from './ExcerptOnlyForm'
import { UserContext } from './context/user'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'


const useStyles = makeStyles(({
    root: {
        flexGrow:1
    },
    center: {
        justifyContent:"center"
    },
    tbMargin:{
      marginTop:16,
      marginBottom:16
    }
}))

const ChooseExcerptForm = () => {
    const classes = useStyles()
    const { books } = useContext(UserContext)
    // const [title, setTitle] = useState("")
    const [form, setForm] = useState({
        bookId: "new"
    })

    const handleChange = (e) => {

        // setTitle(e.target.value[1].toString())
        // setForm({
        //     [e.target.name] : e.target.value[0]
        // })
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }

    const renderForm = (form.bookId === "new" ? <BookExcerptForm /> : <ExcerptOnlyForm parentBookId={form.bookId} />)

    return (
        <div className={classes.root}>
            {/* <Box display="flex" justifyContent="center">
                <Box width={300}>
                <TextField
                    className={classes.center}
                    label="Select Book"
                    name="bookId"
                    select
                    value={''}
                    onChange={handleChange}
                    fullWidth
                >
                <MenuItem value="new">New Book</MenuItem>
                { books.map(book => {
                    return (
                        <MenuItem key={book.id} id={book.id} value={[book.id, book.title]}>
                            {book.title}
                        </MenuItem>
                    )
                })}
                </TextField>
                </Box>
            </Box> */}
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
        </div>
    )
}

export default ChooseExcerptForm