import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Login from './login';
import EditPage from './edit-page';
import Loginscreen from './Loginscreen';
import Register from './Register';
import Myprofile from './myprofile'


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/login" component={Login} />
    <Route path="/edit-page" component={EditPage} />
    <Route path="/loginscreen" component={Loginscreen} />
    <Route path="/register" component={Register} />
    <Route path="/myprofile" component={Myprofile} />
    <Route path="/band/:id" component={Myprofile} />

  </Switch>
)

export default Main;
