import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home';
import CartProducts from './pages/CartProducts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route exact path="/cart" component={ CartProducts } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
