import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'

const Book = () => {

    const params = useParams()
    const { showBook, currentBook } = useContext(UserContext)

    useEffect(() => {
        showBook(params.id)
    },[])

  return (
    <div>
        <h2>{currentBook.title}</h2>
        <h3>By: {currentBook.author}</h3>
    </div>
  )
}

export default Book