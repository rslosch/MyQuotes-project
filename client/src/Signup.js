import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({
    root: {
        margin:30
    },
    center: {
        justifyContent:"center"
    },
    error: {
        color: "red"
    },
    tbPad: {
      paddingTop:20,
      paddingBottom:20
    },
    tbMargin:{
      marginTop:8,
      marginBottom:8
    }
  }))
  

 
const Signup = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)
    const classes = useStyles()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method : "POST",
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => res.json())
        .then(user => {
            if(!user.errors) {
                signup(user)
                navigate('/')
            } else {
                setUsername("")
                setPassword("")
                setPasswordConfirmation("")
                const errorLis = user.errors.map(error => <Typography key={error.id} className={classes.error} variant="h5"> {error} </Typography>)
                setErrorsList(errorLis)
            }
        })
    }

  return (
    <div className={classes.root}>
        <form onSubmit={handleSubmit}>
            <Grid container className={classes.center} align="center">
                <Paper elevation={10} className={classes.tbPad}>
                    <Grid align="center" >
                        <Avatar>
                            <LockOpenIcon />
                        </Avatar>
                        <Typography variant="h4">Sign up</Typography>
                    </Grid>
                    <Grid item xs={4} align="center">
                        <TextField 
                            fullWidth
                            className={classes.tbMargin}
                            variant="outlined"
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField 
                            fullWidth
                            className={classes.tbMargin}
                            variant="outlined"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField 
                            fullWidth
                            className={classes.tbMargin}
                            variant="outlined"
                            label="Confirm Password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                        <Button className={classes.tbMargin} type="submit" variant="contained" size="large" color="primary" > Sign up </Button>
                    </Grid>
                </Paper>
            </Grid>
        </form>
        <ul className={classes.grid}>
            {errorsList}
        </ul>
    </div>
  )
}

export default Signup