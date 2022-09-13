import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const {
      name,
      image,
      price,
      quantity,
      increaseQuantity,
      decreaseQuantity,
      removeItem,
    } = this.props;

    return (
      <>
        <button
          type="button"
          data-testid="remove-product"
          onClick={ () => removeItem(name) }
        >
          X
        </button>

        <div>
          <p
            data-testid="shopping-cart-product-name"
          >
            { name }
          </p>
          <img
            src={ image }
            alt={ name }
          />
          <p>{ price }</p>
        </div>

        <div>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => decreaseQuantity(name) }
          >
            -
          </button>

          <span
            data-testid="shopping-cart-product-quantity"
          >
            { quantity }
          </span>

          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => increaseQuantity(name) }
          >
            +
          </button>
        </div>
      </>
    );
  }
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItem;
