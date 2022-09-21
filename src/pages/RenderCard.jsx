import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

class RenderCard extends Component {
  state = {
    cartItems: [],
    count: 0,
  };

  componentDidMount() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const count = products.length;
    this.setState({
      cartItems: products,
      count,
    });
  }

  increaseQuantity = (name) => {
    const { cartItems } = this.state;

    const products = cartItems.map((cartItem) => {
      if (cartItem.name !== name) {
        return cartItem;
      }

      return {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
    });

    localStorage.setItem('products', JSON.stringify(products));

    this.setState({
      cartItems: products,
    });
  };

  decreaseQuantity = (name) => {
    const { cartItems } = this.state;

    const products = cartItems.map((cartItem) => {
      if (cartItem.name !== name || cartItem.quantity === 1) {
        return cartItem;
      }

      return {
        ...cartItem,
        quantity: cartItem.quantity - 1,
      };
    });

    localStorage.setItem('products', JSON.stringify(products));

    this.setState({
      cartItems: products,
    });
  };

  removeItem = (name) => {
    this.setState((prevState) => {
      const { cartItems } = prevState;
      const filteredItems = cartItems.filter((item) => item.name !== name);

      localStorage.setItem('products', JSON.stringify(filteredItems));

      return {
        cartItems: filteredItems,
        count: filteredItems.length,
      };
    });
  };

  render() {
    const { cartItems, count } = this.state;
    return (
      <div>
        {count !== 0 ? (
          <div>
            <p>
              {`quantidade de Produtos: ${count}`}
            </p>
            {cartItems.map((item) => (
              <CartItem
                key={ item.name }
                name={ item.name }
                image={ item.image }
                price={ item.price }
                increaseQuantity={ this.increaseQuantity }
                decreaseQuantity={ this.decreaseQuantity }
                removeItem={ this.removeItem }
                quantity={ item.quantity }
              />
            ))}
          </div>
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
        <Link to="/checkout" data-testid="checkout-products">confirmar compra</Link>
      </div>
    );
  }
}

export default RenderCard;
