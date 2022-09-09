import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { name, price, image } = this.props;
    return (
      <div data-testid="product">
        <p>{ name }</p>
        <p>{ price }</p>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
