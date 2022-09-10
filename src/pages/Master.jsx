import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Master extends Component {
  render() {
    const { Nome, Imagen, Preco } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{Nome}</p>
        <img src={ Imagen } alt={ Nome } />
        <p>{ Preco }</p>
      </div>
    );
  }
}

export default Master;

Master.propTypes = {
  Nome: PropTypes.string.isRequired,
  Imagen: PropTypes.string.isRequired,
  Preco: PropTypes.number.isRequired,
};
