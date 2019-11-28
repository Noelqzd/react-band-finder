import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Band Finder</Link>} scroll>
              <Navigation>
                <Link to="/edit-page">Edit Page</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/login">Login</Link>
              </Navigation>
            </Header>
            <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">MyPortfolio</Link>}>
              <Navigation>
                <Link to="/edit-page">Edit Page</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/login">Login</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;