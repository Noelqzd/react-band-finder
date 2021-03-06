import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { SessionContext } from '../App';
import RaisedButton from 'material-ui/RaisedButton';
import Axios from 'axios'
import { useHistory } from "react-router-dom";
const Register = (props) => {
  const [state, setState] = useState({});
  const { setSession } = useContext(SessionContext);

  const history = useHistory();

  const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/01/19/17/38/concert-1149805_960_720.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


  const classes = useStyles();
  const handleClick = async () => {
    try {
      console.log(state);

      const response = await Axios.post("https://band-api.herokuapp.com/api/bands", { email: state.email, password: state.password, name: state.name });

      props.onRegister()
    } catch (e) {
      setState({ ...state, error: "Unable to login, try again" })
    }
  }
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Enter your Band Name"
              name="Band Name"
              autoFocus
              onChange={(event) => setState({ ...state, name: event.target.value })}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="email"
              id="email"
              label="Email"
              name="Email"
              autoFocus
              onChange={(event) => setState({ ...state, email: event.target.value })}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => setState({ ...state, password: event.target.value })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => handleClick(event)} />
            <Grid container>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
const style = {
  margin: 15,
};

export default Register;