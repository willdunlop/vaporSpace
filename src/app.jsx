import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
// import Pillars from './components/pillars';
import Home from './components/home';
import Login from './components/login';


const NotFound = () => <div>404 Big Boss</div>;

import './main.scss';


const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
