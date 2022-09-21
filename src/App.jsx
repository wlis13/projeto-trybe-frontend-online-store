import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ProductDetails from './pages/productDetails';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import CartProducts from './pages/CartProducts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route exact path="/cart" component={ CartProducts } />
        <Route path="/ProductDetails/:id" component={ ProductDetails } />
        <Route path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
