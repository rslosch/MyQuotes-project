import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from './context/user'

const ExcerptsList = () => {

    const { excerpts, getExcerpts} = useContext(UserContext)

    useEffect(() => {
        getExcerpts()
    },[])

    const excerptList = excerpts.map((e) => {
        return(
            <div key={e.id}>
                <h1>"{e.quote}", page #{e.page}</h1>
                <h3>Context: {e.context}</h3>
                <h4>{e.book.title}</h4>
                <h4>By: {e.book.author}</h4>
            </div>
        )
    })

  return (
    <div>
        <div>
            <NavLink to='/excerpts/new'>
                <button>Add a new Quote</button>  
            </NavLink>
        </div>
        <div>
            {excerptList}
        </div>
    </div>
  )
}

export default ExcerptsList