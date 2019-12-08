import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import Axios from 'axios';
import {
  useParams
} from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    height: '100%',
    padding: '190px',
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },

//   AVATAR
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  //MY PROFILE
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    textAlign: 'center',
     
    color: theme.palette.text.secondary,
    flex: '5 3 auto',
    margin: theme.spacing(1),
  },
}));





export default function EditPage() {
  const classes = useStyles();
  const {id} = useParams()
  console.log(id);

  const [ band, setBand] = useState({});
  const loadBand = async () =>{
   const response  = await Axios.get(`https://band-api.herokuapp.com/api/bands/${id}?filter={"include":"genre"}`);
   setBand(response.data);
  };
  useEffect(()=> {
    loadBand()
    },[])


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">

        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }

            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                   
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    
                  </Typography>

                  

                </div>

              </Grid>
            </Grid>

          </Paper>
          

          {/* End main featured post */}
          {/* Sub featured posts */}
          
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
          <h3 class="band-name">{band.name}</h3>
              </Typography>
              <Divider />
              {/* {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post} */}
              {/* </Markdown> */}
              
              <div className={classes.root}>
      <div className={classes.container}>
        
    <img alt="Remy Sharp" src={band.imgUrl}/>
          
        
      </div>
    </div>
              <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}><h5>{band.phone}</h5></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}><h5>{band.email}</h5></Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper className={classes.paper}><h3>Band Bio</h3>
                <h5>{band.bio}</h5>
        </Paper>
        </Grid>
        
        
        <Grid >
        <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={100} height={100} />
      <Skeleton variant="rect" width={510} height={318} />
    </div>
        </Grid>
        
      </Grid>
    </div>
            
            

            </Grid>
          
          </Grid>
        </main>
      </Container> 
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" gutterBottom>
            BandFinder
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}