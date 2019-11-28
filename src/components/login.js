import React, { Component, useState } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Loginscreen from './Loginscreen';
import Register from './Register';
const Login = () => {

  const [state, setState] = useState({ buttonLabel: 'Register', isLogin: true });
  const handleClick = () => {
    setState({
      ...state,
      isLogin: !state.isLogin,
      buttonLabel: state.isLogin ? 'login' : 'register'
    });

  }


  return (
    <div className="loginscreen">

      {state.isLogin ? <Loginscreen /> : <Register />}
      <div>



        <RaisedButton label={state.buttonLabel} primary={true} style={style} onClick={(event) => handleClick(event)} />
      </div>


    </div>
  );
}
const style = {
  margin: 15,
};
export default Login;