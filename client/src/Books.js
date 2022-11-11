import React, { useState, useContext } from 'react'
import BookForm from './BookForm'
import Book from './Book'
import EditBookForm from './EditBookForm'
import { Link } from 'react-router-dom'
import { UserContext } from './context/user'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Books = () => {

    const { loggedIn, books } = useContext(UserContext)
    
    if (loggedIn) {
        const booksList = books.map(b => {
            return (
                <ListItem>
                    <ListItemIcon>
                        <LocalLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary={b.title} secondary={b.author}/>
                </ListItem>
                // <li key={b.id}>{b.title}: {b.author}</li>
            )
        })   
        return (
            <Box m={4}>
                <Typography variant="h3">Library of all Books </Typography>
                <br/>
                <Grid container justifyContent="center">
                    <List>
                        {booksList}
                    </List>
                </Grid>
                <br/>
            </Box>
        )
    } else {
        return (
            <h3> Not Authorized - Please Signup or Login</h3>
        )
    }
}

export default Books  