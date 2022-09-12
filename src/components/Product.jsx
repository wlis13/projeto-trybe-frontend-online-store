import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

  handleClick = () => {
    const { name, price, image } = this.props;
    const objectProduct = {
      nomes: name,
      presos: price,
      imagens: image,
    };
    const products = JSON.stringify(objectProduct);
    localStorage.setItem('itens', products);
  };

  render() {
    const { name, price, image, id } = this.props;
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
          Comprar
        </button>
        <Link
          to={ `/ProductDetails/${id}` }
          data-testid="product-detail-link"
          onClick={ this.handleClick }
        >
          Detalhe do produto
        </Link>
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
