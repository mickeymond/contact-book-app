import React from 'react';
import { useAuth0 } from "./auth/react-auth0-spa";
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Spin, Icon } from 'antd/es';
import NavBar from './components/NavBar';
import Home from './screens/Home';

const App: React.FC = () => {
  const { loading, getTokenSilently, user } = useAuth0();
  
  if (loading) {
    return (
      <div className="App App-header">
        <Spin indicator={<Icon type="loading" style={{ fontSize: 30 }} spin />} />
      </div>
    );
  }

  getTokenSilently().then(console.log);
  console.log(user);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
