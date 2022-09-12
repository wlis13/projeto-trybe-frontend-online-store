import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  state = {
    Nomes: '',
    Price: '',
    Imagen: '',
  };

  async componentDidMount() {
    const infoStorage = JSON.parse(localStorage.getItem('itens'));
    this.setState({
      Nomes: infoStorage.nomes,
      Price: infoStorage.presos,
      Imagen: infoStorage.imagens,
    });
  }

  render() {
    const { Nomes, Price, Imagen } = this.state;
    return (
      <div>
        <Link to="/Cart" data-testid="shopping-cart-button">Carrinho</Link>
        <h3 data-testid="product-detail-name">{ Nomes }</h3>
        <img src={ Imagen } alt="imagem do produto" data-testid="product-detail-image" />
        <h4 data-testid="product-detail-price">{` R$${Price} `}</h4>
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
export default ProductDetails;
