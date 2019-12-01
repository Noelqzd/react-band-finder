import React, { useState, useContext } from 'react';
import { SessionContext } from '../App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Axios from 'axios';
const Loginscreen = () => {
  const { session, setSession } = useContext(SessionContext);

  const [state, setState] = useState({});

  const handleClick = async () => {
    try{
      
      const response = await Axios.post("https://band-api.herokuapp.com/api/bands/login", { email: state.email, password: state.password });
      console.log(response);
    } catch(e){
      setState({...state, error: "Unable to login, try again"})
    }
  }


  return (
    <div>
      <MuiThemeProvider>
        <div>
          <h1> Log in </h1>
  {state.error?<div>{state.error}</div>:null}
          <TextField
            type="text"
            hintText="Enter your E-mail"
            floatingLabelText="E-mail"
            onChange={(event, email) => setState({ ...state, email })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, password) => setState({ ...state, password })}
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
export default Loginscreen;