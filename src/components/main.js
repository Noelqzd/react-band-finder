import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Login from './login';
import EditPage from './edit-page';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/login" component={Login} />
    <Route path="/edit-page" component={EditPage} />
  </Switch>
)

export default Main;
