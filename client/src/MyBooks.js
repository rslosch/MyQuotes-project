import React, {useContext} from 'react'
import { UserProvider } from './context/user'

const MyBooks = () => {

    const { user } = useContext(UserProvider)
  return (
    <div>MyBooks</div>
  )
}

export default MyBooks