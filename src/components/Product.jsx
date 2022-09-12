import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  setProductsStorage = () => {
    const favorites = JSON.parse(localStorage.getItem('products')) || [];
    const { name, price, image } = this.props;
    const objectProduct = {
      nomes: name,
      presos: price,
      imagens: image,
    };
    const array = objectProduct;
    favorites.push(array);
    localStorage.setItem('products', JSON.stringify(favorites));
  };

  render() {
    const { name, price, image } = this.props;
    return (
      <div data-testid="product">
        <p>{ name }</p>
        <p>{ price }</p>
        <img src={ image } alt={ name } />
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.setProductsStorage }
        >
          botao
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
