import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
// import Pillars from './components/pillars';
import Home from './components/home';

const NotFound = () => <div>404 Big Boss</div>;

import './main.scss';


const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
      <hr />
    </div>
  </Router>
);

export default App;
