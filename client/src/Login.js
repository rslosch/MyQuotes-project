import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
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
    marginTop:15,
    marginBottom:15
  }
}))

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword]= useState("")
  const [error, setError] = useState("")
  const {login} = useContext(UserContext)
  const classes = useStyles()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/login", {
      method : "POST",
      headers: { 'Content-Type' : 'application/json'},
      body: JSON.stringify({
          username: username,
          password: password
      })
    })
      .then(res => res.json())
      .then(user => {
        if(!user.error){
          login(user)
          navigate('/')
        } else {
          setUsername("")
          setPassword("")
          const errorLi = <li> {user.error} </li>
          setError(errorLi)
        }
      })
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container className={classes.center}>
          <Paper elevation={10} className={classes.tbPad}>
            <Grid align="center" >
              <Avatar>
                <ExitToAppIcon />
              </Avatar>
              <Typography variant="h4">Login</Typography>
            </Grid>
            <Grid container className={classes.center} sx={{m:10}} >
              <Grid item xs={6}>
                <TextField 
                  fullWidth
                  className={classes.tbMargin}
                  variant="outlined"
                  label="Username"
                  placeholder='Enter Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField 
                  fullWidth
                  variant="outlined"
                  label="Password"
                  placeholder='Enter Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button className={classes.tbMargin} type="submit" variant="contained" size="large" color="primary" >Submit </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
      <ul className={classes.error}>
        {error}
      </ul>
    </div>
  )
}

export default Login