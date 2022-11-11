import React, { useContext } from 'react'
import { UserContext } from './context/user'
import Typography from '@material-ui/core/Typography';

const Home = () => {
    const  { user, loggedIn } = useContext(UserContext)
    // const navigate = useNavigate()

    if(!loggedIn){
        return (
            <>
                <br/>
                <Typography variant="h3"> Please Login or Signup Above </Typography>
            </>
        )
    } else {
        const myBooksList = user.unique_books.map(b => {
            return (
            <li key={b.id}> {b.title}</li>
            )
        })
        return (
            <div>
                <h1>{user.username}'s Homepage</h1>
                <h2> Welcome to your MyQuotes Library App! </h2>
                <h4> Easily store and record memorable quotes from your recently read books.</h4>
                <h4> View your books below and Visit the My Quotes tab to track!</h4>
                {myBooksList}
            </div>
        )
     }
}

export default Home