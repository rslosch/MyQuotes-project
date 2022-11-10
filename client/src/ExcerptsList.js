import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from './context/user'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(({
    root: {
        flexGrow:1,
        alignItems:"stretch"
    },
    center: {
        justifyContent:"center"
    },
    tbMargin:{
      marginTop:16,
      marginBottom:16
    }
}))

const ExcerptsList = () => {

    const { excerpts, getExcerpts, deleteExcerpt} = useContext(UserContext)
    const classes = useStyles()
    useEffect(() => {
        getExcerpts()
    },[])

    const excerptList = excerpts.map((e) => {
        return(
            <Grid item key={e.id} xs={12} md={6} lg={4}>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">Context: {e.context}</Typography>
                        <Typography variant="h4">"{e.quote}"</Typography>
                        <Typography variant="h6"> {e.book.title}</Typography>
                        <Typography variant="h6"> By: {e.book.author}</Typography>
                        <Typography variant="overline"> page #{e.page}</Typography>
                    </CardContent>
                    <CardActions className={classes.center}>
                        <NavLink to={`/excerpts/${e.id}/edit`}>
                            <Button size="small">Edit</Button>
                        </NavLink>
                        <Button id={e.id} onClick={(e) => deleteExcerpt(e.target.parentNode.id)} size="small" color="secondary"> Delete</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    })

  return (
    <Container>
        <Grid className={classes.tbMargin}>
            <NavLink to='/excerpts/new'>
                <Button size="large" variant="contained">Add a new Quote</Button>  
            </NavLink>
        </Grid>
        <Grid container spacing={2} className={classes.root}>
            {excerptList}
        </Grid>
    </Container>
  )
}

export default ExcerptsList