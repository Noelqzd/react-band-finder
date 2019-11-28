import React, { Component, useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const Loginscreen = () => {

  const [state, setState] = useState();

  const handleClick = () => {
    console.log('log in', state);
  }


  return (
    <div>
      <MuiThemeProvider>
        <div>
          <h1> Log in </h1>
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange={(event, newValue) => setState({ username: newValue })}
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
export default Loginscreen;