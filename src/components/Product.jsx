import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  setProductsStorage = () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const { name, price, image } = this.props;
    const objectProduct = { name, price, image, quantity: 1 };

    localStorage
      .setItem('products', JSON.stringify([...products, objectProduct]));
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
          Adicionar ao carrinho
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
