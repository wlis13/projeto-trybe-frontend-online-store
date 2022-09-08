import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link data-testid="shopping-cart-button" to="/card">Enter</Link>
        </nav>
      </div>
    );
  }
}

export default Home;