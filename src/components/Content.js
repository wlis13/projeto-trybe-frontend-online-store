import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardProducts from './CardProducts';

class Content extends Component {
  render() {
    return (
      <Switch>
        <main>
          <Route exact path="/card" component={ CardProducts } />
        </main>
      </Switch>
    );
  }
}

export default Content;
