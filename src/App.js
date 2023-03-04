import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Route>
          <Switch>
            <Route exact path="/project-trybewallet/" component={ Login } />
            <Route path="/carteira" component={ Wallet } />
          </Switch>
        </Route>
      </main>
    </>
  );
}

export default App;
