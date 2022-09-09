import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/api';
import Product from './Product';

class Home extends Component {
  state = {
    searchContent: '',
    searchResult: '',
  };

  inputChange = async ({ target }) => {
    const { value } = target;
    this.setState({ searchContent: value });
  };

  clickSearch = async () => {
    const { searchContent } = this.state;
    const search = await getProductById(searchContent);
    this.setState({ searchResult: search.results });
  };

  render() {
    const { searchResult } = this.state;

    return (
      <div>
        <nav>
          <Link data-testid="shopping-cart-button" to="/card">Enter</Link>
        </nav>

        <div>
          <input data-testid="query-input" onChange={ this.inputChange } />
          <input
            type="button"
            data-testid="query-button"
            onClick={ this.clickSearch }
            value="Search"
          />
        </div>
        {searchResult ? (searchResult.map((item) => (
          <Product
            key={ item.id }
            name={ item.title }
            price={ item.price }
            image={ item.thumbnail }
          />))) : <p>Nenhum produto foi encontrado</p>}

      </div>
    );
  }
}

export default Home;
