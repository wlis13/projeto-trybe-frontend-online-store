import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Home1 from './list/Home1';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home1 } />
      <Home />
      <Content />
    </BrowserRouter>
  );
}

export default App;
