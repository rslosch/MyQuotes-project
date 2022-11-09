import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        }
    },
    grid: {
        justifyContent:"center"
    },
    error: {
        color: "red"
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
            <Grid container className={classes.grid}>
                <Grid item xs={6}>
                    <TextField 
                        variant="outlined"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField 
                        variant="outlined"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField 
                        variant="outlined"
                        label="Confirm Password"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Button type="submit" variant="contained" size="large" color="primary" > Sign up </Button>
        </form>
        <ul className={classes.grid}>
            {errorsList}
        </ul>
    </div>
  )
}

export default Signup