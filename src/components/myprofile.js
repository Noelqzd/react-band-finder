import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import YouTube from 'react-youtube';
import getYouTubeID from 'get-youtube-id';
import Axios from 'axios';
import Toolbar from '@material-ui/core/Toolbar';
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
  mainFeaturedPostContent: {
    position: 'relative',
    height: '48px',
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  //MY PROFILE
  container: {
    display: 'flex',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '5 3 auto',
    margin: theme.spacing(1),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  bio: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    border: 5,
    borderRadius: 20,
    boxShadow: '0 1px 3px 3px black',
    background: 'rgb(46,185,199)',
    background: 'linear-gradient(145deg, rgba(46,185,199,1) 44%, rgba(163,167,238,1) 71%)',
  },
  image: {
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 0),
  },
  footer: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(10, 0),
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/10/25/10/07/music-instruments-2887457_960_720.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    border: 5,
    boxShadow: '0 1px 3px 3px black',  
  },
  videos1: {
    display: 'inline',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2,40),
  },
  number: {
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 0),
    border: 5,
    borderRadius: 20,
    boxShadow: '0 1px 3px 3px black',
    background: 'rgb(46,185,199)',
background: 'linear-gradient(145deg, rgba(46,185,199,1) 44%, rgba(163,167,238,1) 71%)',
  },
}));





export default function EditPage() {
  const classes = useStyles();
  const { id } = useParams()
  console.log(id);

  const [band, setBand] = useState({});
  const loadBand = async () => {
    const response = await Axios.get(`https://band-api.herokuapp.com/api/bands/${id}?filter={"include":"genre"}`);
    setBand(response.data);
  };
  useEffect(() => {
    loadBand()
  }, [])


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">

        <main>
          <Paper className={classes.mainFeaturedPost}>

            {
              <img
                style={{ display: 'none' }}
                src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_960_720.jpg"
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
          {/* Main content */}
          <Grid item lg={14} md={10}>
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h1"
              variant="h5"
              align="center"
              className={classes.toolbarTitle}
            >
                <Paper className={classes.number}><h3>{band.name}</h3></Paper>
           </Typography>
            </Toolbar>
            <Divider />
           
            <div className={classes.image}>
             
                <img class="profile"alt="Remy Sharp" src={band.imgUrl} />
              
            </div>
            </Grid>
            <div className={classes.root}>
              <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                <Paper className={classes.number}><h5>{band.phone}</h5></Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className={classes.number}><h5>{band.email}</h5></Paper>
                </Grid>
                <Grid item lg={12} sm={6}>
                  
                  <Paper className={classes.bio}>
                  <h3>Band Bio</h3>
                  <h5>{band.bio}</h5>
                  </Paper>
                </Grid>


               
                  <div className={classes.videos1}>
                    {band.videos ? (band.videos.map((video) => {

                      return <YouTube
                        videoId={getYouTubeID(video)}
                        opts={{
                          height: '390',
                          width: '640',
                          playerVars: {
                          }

                        }}
                      />
                    })) : null}
                  </div>
                </Grid>

             
            </div>


 

         

        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
            BandFinder.com
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            <h5>Right from the start, your BandFinder profile distinguishes between individuals and groups.</h5>
            So if you want to create a profile page for a band that needs members, you can.
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}