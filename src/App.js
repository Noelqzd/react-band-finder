import React, { createContext, useState, useEffect } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



export const SessionContext = createContext();
const App = () => {
  const [session, setSession] = useState({});
  useEffect(() => {
    if (session.id) {

      localStorage.setItem("session", JSON.stringify(session));
    } else if (session.logout) {
      localStorage.removeItem("session");
    }
  }, [session]);
  useEffect(() => {
    const savedSession = localStorage.getItem("session");

    if (savedSession) {
      const parsedSession = JSON.parse(savedSession);
      if (parsedSession && parsedSession.id) {
        setSession(parsedSession);
      }
    }
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <MuiThemeProvider>
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Band Finder</Link>} scroll>
              <Navigation>
                {session && session.user ? <Link to="/edit-page">Edit Page</Link> : null}
                <Link to="/aboutme">About Us</Link>
                {session && session.user ? <Link to={`/band/${session.userId}`}>My Band</Link> : null}
                <Link to="/login">{session.userId ? "Logout" : "Login"}</Link>
              </Navigation>
            </Header>
            <Drawer title={<Link style={{ textDecoration: 'none', color: 'black' }} to="/">Band Finder</Link>}>
              <Navigation>
                {session && session.user ? <Link to="/edit-page">Edit Page</Link> : null}
                <Link to="/aboutme">About Us</Link>
                {session && session.user ? <Link to={`/band/${session.userId}`}>My Band</Link> : null}
                <Link to="/login">{session.userId ? "Logout" : "Login"}</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>

        </div>
      </MuiThemeProvider>
    </SessionContext.Provider>

  );
}

export default App;