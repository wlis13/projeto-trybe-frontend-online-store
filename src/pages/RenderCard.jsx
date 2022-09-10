import React, { Component } from 'react';
import Master from './Master';

class RenderCard extends Component {
  state = {
    storageValues: [],
    contador: 0,
  };

  componentDidMount() {
    const favorite = JSON.parse(localStorage.getItem('products')) || [];
    const array = favorite.map((itens) => itens);
    const count = array.length;
    this.setState({
      storageValues: array,
      contador: count,
    });
  }

  render() {
    const { storageValues, contador } = this.state;
    return (
      <div>
        {contador !== 0 ? (
          <div>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              {`quantidade de Produtos: ${contador}`}
            </p>
            {storageValues.map((itens, pos) => (
              <Master
                key={ pos }
                Nome={ itens.nomes }
                Imagen={ itens.imagens }
                Preco={ itens.presos }
              />
            ))}
          </div>
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
      </div>
    );
  }
}

export default RenderCard;
