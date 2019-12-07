import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from 'material-ui/TextField';
import { SessionContext } from '../App';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Axios from 'axios';

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
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(16),
      paddingRight: 10,
    },
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
    backgroundAttachment: 'fixed',
  },

}));






export default function EditPage() {
  const classes = useStyles();
  const { session, setSession } = useContext(SessionContext);
  const [state, setState] = useState({videos:[]});
  const [genres, setGenres] = useState([]);



  useEffect(() => {
    if (session.user) {

      setState({ ...session.user, videos: session.user.videos || [] })
    }
  }, [session]);

  useEffect(() => {
    loadGenres()
  }, [])

  const loadGenres = () => {
    Axios.get('https://band-api.herokuapp.com/api/genres').then((response) => {
      setGenres(response.data);
    })
  }
console.log(state);

  const saveBand = () => {
    Axios.patch(`https://band-api.herokuapp.com/api/bands/${session.userId}`, {
      "name": state.name,
      "bio": state.bio,
      "imgUrl": state.imgUrl,
      "videos": state.videos,
      "phone": state.phone,
      // "location": {},
      "genreId": state.genreId,
    }, {
      headers: {
        Authorization: session.id
      }
    }).then(() => {
      console.log("Success");
      setSession({
        ...session,
        user: {
          ...session.user,
          ...state
        }
      });
    }).catch((e) => {
      console.log(state)
      console.log("Fail", e);
    });
  }






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
                  BandFinder.
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                  intends to be the definitive search platform that help people to connect with your band.
                  </Typography>
                  So rather than building and managing your own search platform and community, simply utilize our advanced BandFinder website. By becoming an affiliate partner, 
                  you'll gain a new channel through which to market your products and services to our audience.
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
              <Button variant="contained" color="primary">
                Go to profile
              </Button>
            </Typography>
          </Toolbar>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid alignItems="stretch" item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                <h4>Create a Beautiful Profile With Just A Few Clicks</h4>
                <h4>Based Off Your Band Profile. Videos, Gallery, Blog, Location and Genre.</h4>
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  type="text"
                  required
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  hintText="Enter your band name"
                  floatingLabelText="Band Name"
                  onChange={(event, name) => setState({ ...state, name })}
                  value={state.name}
                />
                <TextField
                  type="text"
                  fullWidth
                  hintText="Enter your contact number"
                  floatingLabelText="Phone Number"
                  onChange={(event, phone) => setState({ ...state, phone })}
                  value={state.phone}
                />
                <br />
                <TextField id="input-with-icon-grid" label="With a grid"
                  multiLine
                  rows="5"
                  type="text"
                  fullWidth
                  hintText="Edit your band description"
                  floatingLabelText="Band Description"
                  onChange={(event, bio) => setState({ ...state, bio })}
                  value={state.bio}
                />
                <br />
                {state.videos.map((video, i) =>
                  <TextField
                    type="text"
                    fullWidth
                    hintText="Add your videos"
                    floatingLabelText="Add or delete videos"
                    onChange={(event, value) => {
                      const videos = state.videos;
                      videos[i] = value
                      setState({ ...state, videos })
                    }}
                    value={video}
                  />
                )}
                <Button variant="contained" color="primary" onClick={(event, value) => {
                  const videos = state.videos;
                  videos.push("")
                  setState({ ...state, videos })
                }}>
                  Add Video
</Button>
                <TextField
                  type="text"
                  fullWidth
                  hintText="Add your images"
                  floatingLabelText="Add Images"
                  onChange={(event, imgUrl) => setState({ ...state, imgUrl })}
                  value={state.imgUrl}
                />
                <br />
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.genreId}
                    fullWidth
                    onChange={(event) => setState({ ...state, genreId: event.target.value })}
                  >
                    {genres.map((item) => {
                      return <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                    })}
                  </Select>
                </FormControl>
                <br />
                <Button variant="contained" color="primary" onClick={saveBand}>
                  Submit
</Button>
              </form>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </Paper>
             
            
             
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Right from the start, your BandFinder profile distinguishes between individuals and groups.
           So if you want to create a profile page for a band that needs members, you can.
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}