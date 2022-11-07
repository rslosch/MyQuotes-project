import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'
import ExcerptOnlyForm from './ExcerptOnlyForm'

const Book = () => {

    const [formFlag, setFormFlag] = useState(false)
    const params = useParams()
    const { showBook, currentBook } = useContext(UserContext)

    useEffect(() => {
        showBook(params.id)
    },[])

  return (
    <div>
        <h2>{currentBook.title}</h2>
        <h3>By: {currentBook.author}</h3>
        <br />
        {/* {excerptsList} */}
        {formFlag ?
          <ExcerptOnlyForm paramBookId={params.id} />
          :
          <button onClick={() => setFormFlag(true)}>Add Excerpt</button>
        }
        
    </div>
  )
}

export default Book