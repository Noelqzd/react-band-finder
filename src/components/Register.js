import React, { useState, useContext } from 'react';
import { SessionContext } from '../App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from 'axios'
const Register = (props) => {
  const [state, setState] = useState({});
  const { session, setSession } = useContext(SessionContext);


  const handleClick = async () => {
    try {

      const response = await Axios.post("https://band-api.herokuapp.com/api/bands", { email: state.email, password: state.password, name: state.name });
     props.onRegister();
    } catch (e) {
      setState({ ...state, error: e.response.data.error.message })
    }
  }

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <h1>Register</h1>
          {state.error?<div>{state.error}</div>:null}
          <TextField
            hintText="Enter your Band Name"
            floatingLabelText="Band Name"
            onChange={(event, name) => setState({ ...state, name })}
          />
          <br />

          <TextField
            hintText="Enter your Email"
            type="email"
            floatingLabelText="Email"
            onChange={(event, email) => setState({ ...state, email })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, password) => setState({...state, password })}
          />
          <br />
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => handleClick(event)} />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

const style = {
  margin: 15,
};
export default Register;