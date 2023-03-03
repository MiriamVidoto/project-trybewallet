import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Route>
        <Switch>
          <Route exact path="/project-trybewallet/" component={ Login } />
          <Route path="/carteira" component={ Wallet } />
        </Switch>
      </Route>
    </div>
  );
}

export default App;
