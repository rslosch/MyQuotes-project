import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  }
}))

const Navbar = () => {
  const {user, logout, loggedIn} = useContext(UserContext)
  const classes = useStyles() 
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
    })
    .then(() => {
      navigate('/login')
      logout()
    })
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };
 
  if(loggedIn){
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge='start' className={classes.menuButton}color="inherit" aria-label='menu' onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <NavLink to='/'>
                    <Button>
                      <HomeIcon/>
                      Home
                    </Button>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose} >
                <NavLink to='/excerpts'>
                  <Button>
                    <FormatQuoteIcon/>
                    My Quotes
                  </Button>  
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose} >
                <NavLink to='/books'>
                  <Button>
                    <LibraryBooksIcon/>
                    Book Library
                  </Button>  
                </NavLink>
              </MenuItem>
            </Menu>

            <Typography variant='h6' className={classes.title}>Welcome, {user.username}</Typography>

            <Button variant='contained' onClick={logoutUser}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <NavLink to='/login'>
          <Button variant="contained" color="primary">Login</Button>  
        </NavLink>
        <NavLink to='/signup'>
          <Button variant="contained" color="primary">Signup</Button>  
        </NavLink>
      </div>
    )
  }
}

export default Navbar