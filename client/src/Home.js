import React, { useContext, useEffect } from 'react'
import { UserContext } from './context/user'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Home = () => {
    const  { user, loggedIn } = useContext(UserContext)

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
                <ListItem key={b.id}>
                    <ListItemIcon>
                        <LocalLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary={b.title} secondary={b.author}/>
                </ListItem>
            )
        })
        return (
            <Box m={4}>
                <Grid container justifyContent='center'>
                    <Typography variant="h2">{user.username}'s Homepage</Typography>
                </Grid>
                <Box m={4}>
                    <Grid container justifyContent='center'>
                        <Typography variant="h3"> Welcome to your MyQuotes Library App! </Typography>
                        <Typography variant="h5"> Easily store and record memorable quotes from your recently read books.</Typography>
                        <Typography variant="h5"> View your books below and visit the MyQuotes tab to track!</Typography>
                    </Grid>
                </Box>
                <Grid container justifyContent="center">
                    <List>
                        {myBooksList}
                    </List >
                </Grid>
            </Box>
        )
     }
}

export default Home