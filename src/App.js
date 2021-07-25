import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import styled from 'styled-components';
import Spinner from 'react-spinkit';

import { auth } from './firebase';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat'
import LogIn from './components/LogIn';

import './App.css';

function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoadingContainer>
        <AppLoadingContentContainer>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt="Slack logo"
          />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />

        </AppLoadingContentContainer>
      </AppLoadingContainer>
    )
  }

  return (
    <div className="App">
      <Router>
        {
          !user ? (
            <LogIn />
          ) : (
            <>
              <Header />
              <AppBody>
                <Sidebar />
                <Switch>
                  <Route path="/" exact>
                    <Chat />
                  </Route>
                </Switch>
              </AppBody>
            </>
          )
        }
      </Router>
    </div>
  );
}

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoadingContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContentContainer = styled.div`
  text-align: center;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

export default App;
