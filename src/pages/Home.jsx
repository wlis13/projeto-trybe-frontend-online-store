import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import Product from '../components/Product';
import { getProductById, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  state = {
    selectedCategory: '',
    searchContent: '',
    searchResult: [],
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  clickSearch = async () => {
    const { searchContent } = this.state;
    const search = await getProductById(searchContent);
    this.setState({ searchResult: search.results });
  };

  handleChangeCategory = async ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    }, async () => {
      const { selectedCategory } = this.state;

      const { results } = await getProductsFromCategoryAndQuery(selectedCategory);

      this.setState({
        searchResult: results,
      });
    });
  };

  render() {
    const { selectedCategory, searchResult, searchContent } = this.state;
    return (
      <div>
        <Categories
          onChange={ this.handleChangeCategory }
          selectedCategory={ selectedCategory }
        />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Carrinho
        </Link>
        <div>
          <input
            data-testid="query-input"
            name="searchContent"
            value={ searchContent }
            onChange={ this.handleChange }
          />
          <input
            type="button"
            data-testid="query-button"
            onClick={ this.clickSearch }
            value="Search"
          />
        </div>
        {
          searchResult.length
            ? searchResult.map((item) => (
              <Product
                key={ item.id }
                name={ item.title }
                price={ item.price }
                image={ item.thumbnail }
                id={ item.id }
              />
            ))
            : <p>Nenhum produto foi encontrado</p>
        }
      </div>
    );
  }
}

export default Home;
