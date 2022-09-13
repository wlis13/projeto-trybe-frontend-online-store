import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  setProductsStorage = () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const { name, price, image } = this.props;
    const objectProduct = { name, price, image, quantity: 1 };

    localStorage
      .setItem('products', JSON.stringify([...products, objectProduct]));
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
          Adicionar ao carrinho
<<<<<<< HEAD
=======

>>>>>>> 07087bd2404405c4b8746b7b226a0a72ada27df4
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
