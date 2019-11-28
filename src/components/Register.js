import React, { useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const Register = () => {
  const [state, setState] = useState();

  const handleClick = () => {
    console.log('log in', state);
  }
  

  return (
    <div>
      <MuiThemeProvider>
        <div>
          <h1>Register</h1>
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            onChange={(event, newValue) => setState({ first_name: newValue })}
          />
          <br />
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            onChange={(event, newValue) => setState({ last_name: newValue })}
          />
          <br />
          <TextField
            hintText="Enter your Email"
            type="email"
            floatingLabelText="Email"
            onChange={(event, newValue) => setState({ email: newValue })}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange={(event, newValue) => setState({ password: newValue })}
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