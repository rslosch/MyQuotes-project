import React, { useState, useEffect } from 'react'

//Create the context object
const UserContext = React.createContext()

//Create the context provider component
function UserProvider({ children }) {
    const [user, setUser] = useState({
        unique_books: []
    })
    const [loggedIn, setLoggedIn] = useState(false)
    const [books, setBooks] = useState([])
    const [excerpts, setExcerpts] = useState([])

    useEffect(() => {
            fetch('/me')
            .then(res => res.json())
            .then(data => {
                setUser(data)
                if(data.error){
                    setLoggedIn(false)
                } else {
                    setLoggedIn(true)
                    fetchBooks()
                }
            })
    }, [])

    const fetchBooks = () => {
        fetch('/books')
        .then(res => res.json())
        .then(data => {
            setBooks(data)
        })

    }

    const addBook = (form) => {
        fetch('/books', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({
                book: {
                    author: form.author,
                    title: form.title,
                    excerpts_attributes: [{
                        quote: form.quote,
                        context: form.context,
                        page: parseInt(form.page),
                        user_id: user.id
                    }]
                }
            })
        })
        .then(res => res.json())
        .then(data => {
            setBooks([...books, data])
            getExcerpts()
        })
    }

    const updateBook = (id, book) => {
        fetch(`/books/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
            const updatedBooks = books.map(b => b.id === data.id ? data : b)
            setBooks(updatedBooks)
        })
    }

    const deleteBook = (bookId) => {
        fetch(`/books/${bookId}`, {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' }
        })
        .then(() => {
            const updatedBooks = books.filter(b => b.id != bookId)
            setBooks(updatedBooks)
        })
    }

    const getExcerpts = () => {
        fetch('/excerpts')
        .then(res => res.json())
        .then(d => {
            setExcerpts(d)
        })
    }

    const addExcerpt = (form) => {
        fetch(`/excerpts`,{
        method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(data => {
            setExcerpts([...excerpts, data])
        })
    }

    const updateExcerpt = (id, excerpt) => {
        fetch(`/excerpts/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(excerpt)
        })
        .then(res => res.json())
        .then(data => {
            const updatedExcerpts = excerpts.map(e => e.id === data.id ? data : e)
            setExcerpts(updatedExcerpts)
        })
    }

    const deleteExcerpt = (id) => {
        fetch(`/excerpts/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type' : 'application/json' }
        })
        .then(() => {
            const updatedExcerpts = excerpts.filter(e => e.id != id)
            setExcerpts(updatedExcerpts)
        })
    }
    
    const login = (user) => {
        setUser(user)
        fetchBooks()
        setLoggedIn(true)
    }

    const logout = () => {
        setUser({})
        setBooks([])
        setLoggedIn(false)
    }

    const signup = (user) => {
        setUser(user)
        fetchBooks()
        setLoggedIn(true)
    }

    return (
        <UserContext.Provider value = {{user, login, logout, signup, loggedIn, books, fetchBooks, addBook, deleteBook, updateBook, addExcerpt, excerpts, getExcerpts, updateExcerpt, deleteExcerpt}}>
            {children}
        </UserContext.Provider>
    )
}

//export
export { UserContext, UserProvider }