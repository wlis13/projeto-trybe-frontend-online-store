import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Content />
    </BrowserRouter>
  );
}

export default App;