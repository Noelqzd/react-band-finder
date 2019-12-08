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
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 8,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 80,
  padding: '0 90px',
});

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
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/10/25/10/07/music-instruments-2887457_960_720.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
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
    padding: theme.spacing(3, 2),
    marginRight: '200px',
    marginTop: '0px',
  },
  footer: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(10, 0),
    backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/10/25/10/07/music-instruments-2887457_960_720.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
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
            <MyButton><h3>{band.name}</h3></MyButton>
            <Divider />
            {/* {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post} */}
            {/* </Markdown> */}
            <Grid item xs={14} md={10}>
            <div className={classes.root}>
              <div className={classes.container}>

                <img class="profile"alt="Remy Sharp" src={band.imgUrl} />


              </div>
            </div>
            </Grid>
            <div className={classes.root}>
              <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                <MyButton><h3>{band.phone}</h3></MyButton>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyButton><h6>{band.email}</h6></MyButton>
                </Grid>
                <Grid item lg={12} sm={6}>
                  <Paper className={classes.paper}><h3>Band Bio</h3>
                    <h5>{band.bio}</h5>
                  </Paper>
                </Grid>


                <Grid item lg={18} sm={6}>
                  <div>
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

              </Grid>
            </div>



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