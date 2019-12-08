import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import BandCard from './band-card';
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
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10),
      paddingRight: 0,
      
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
    background: 'rgb(24,76,108)',
background: 'linear-gradient(145deg, rgba(24,76,108,1) 3%, rgba(190,214,238,1) 91%)',
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
    background: 'rgb(24,76,108)',
    background: 'linear-gradient(145deg, rgba(24,76,108,1) 3%, rgba(190,214,238,1) 91%)',


  },
  sidebarSection: {
    marginTop: theme.spacing(3),
    
  },
  footer: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(10, 0),
    backgroundImage: 'url(https://asterasvillas.com/wp-content/uploads/2018/05/footer-background-img.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',

    
  },

  
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: 'rgb(145,181,203)',
    background: 'linear-gradient(145deg, rgba(145,181,203,1) 72%, rgba(190,214,238,1) 91%)',
  },
  
 
  container:{
    background: 'rgb(145,181,203)',
    background: 'linear-gradient(145deg, rgba(145,181,203,1) 72%, rgba(190,214,238,1) 91%)',
  }
  
}));

export default function Blog() {
  const classes = useStyles();
  const [ featured, setFeatured] = useState([]);
  const [ results, setResults ] = useState([]);
  const loadFeatured = async () =>{
   const response  = await Axios.get('https://band-api.herokuapp.com/api/bands?filter={"where":{"featured":true},"include":"genre"}');
   setFeatured(response.data)
  };

  const searchBand = async (q) =>{
    if (!q){
      setResults([])
      return;
    }
    const response  = await Axios.get(`https://band-api.herokuapp.com/api/bands?filter={"where":{"name":{"like":".*${q}.*","options":"i"}},"include":"genre","limit":12}`);
    setResults(response.data)
   };
  useEffect(()=> {
  loadFeatured()
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
                src="https://source.unsplash.com/photos/random?collection=827741"
                alt="background"
              />
            }

            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    SEEKING BANDS?
                    Search Thousands of Musicians and Bands:
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                  BandFinder is the best place on the Internet to find the perfect band you need for your party. It’s totally free, so get started today!
                  </Typography>
                  <Link variant="subtitle1" href="#">
                    Continue reading…
                  </Link>
                </div>

              </Grid>
            </Grid>

          </Paper>
          <Toolbar className={classes.toolbar}>
           
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              className={classes.toolbarTitle}
            >
               <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />}  />
                  Trending Bands
                  
            </Typography>
            
            
          </Toolbar>
          <Grid container spacing={4}>
            {featured.map(band =>
            <BandCard band = {
              band
            }/>
            )}
           
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              

              <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
      <h4>As a proven leader in online music services, BandFinder.com</h4>
      </Typography>
      <Typography component="p">
                 <h5>thousands of profiles mean thousands of possibilities to connect with the right Bands. </h5>
                 <h5>Browse the Listings by genre or nearby, or search for exactly what you are looking for.</h5>
                 
        
      

      </Typography>

    </Paper>
  
              
              <Divider />


  
              <Toolbar className={classes.toolbar}>
       
          <SearchIcon />
        
        <TextField
            type="text"
              variant="outlined"
              margin="normal"
              required
               fullWidth
               onChange = {(event)=>{
               searchBand(event.target.value)
               }}
              label="Search your favorite Bands"
              autoFocus
            />
           
             
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
         
        </Typography>
       
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        
          <Link
            color="inherit"
            noWrap
            
            variant="body2"
           
            className={classes.toolbarLink}
          >
            
          </Link>
       
      </Toolbar>
 

              <Grid container spacing={4}>
              {results.map(band =>
            <BandCard band = {
              band
            }/>
            )}
            
          </Grid>
     


            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography>
               <h4> BandFinder is a service for serious Bands.</h4> 
               <h5>Our goal is to provide the most useful online resource that connects the best Bands with you.</h5>

               <h6>Are you looking for a band?
                 BandFinder understands the differences. You each have different needs, and now, there's one website that truly understands how to help you find exactly what you're looking for.</h6> 
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
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

