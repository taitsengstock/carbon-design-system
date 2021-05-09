import React, { Component } from 'react';
import './App.scss';
import { Content } from 'carbon-components-react';
import AppHeader from './components/AppHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

function App() {
  return (
    <>
      <AppHeader/>
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
