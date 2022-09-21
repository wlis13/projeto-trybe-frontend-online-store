import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import '../Style.css';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsInfo: [],
      message: false,
      Name: '',
      email: '',
      cpf: '',
      telefone: '',
      cep: '',
      endereco: '',
      onChecked: '',
      confirmBuy: false,
    };
  }

  componentDidMount() {
    const itensStorage = JSON.parse(localStorage.getItem('products'));
    this.setState({ productsInfo: itensStorage });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheck = (event) => {
    const eventCheck = event.target.value;
    this.setState({ onChecked: eventCheck });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      Name,
      email,
      cpf,
      telefone,
      cep,
      endereco,
      onChecked,
    } = this.state;
    if (Name === '' || email === '' || telefone === '' || cep === '') {
      this.setState({ message: true });
    } else { this.setState({ message: false }); }

    if (cpf === '' || endereco === '' || onChecked === '') {
      this.setState({ message: true });
    } else { this.setState({ message: false }); }

    if (Name !== '' && email !== '' && telefone !== '' && cpf !== '' && endereco !== ''
    && cep !== '' && onChecked !== '') {
      this.setState({
        Name: '',
        email: '',
        cpf: '',
        telefone: '',
        cep: '',
        endereco: '',
        onChecked: '',
      });
      this.setState({ confirmBuy: true });
    }
  };

  render() {
    const { productsInfo, message, Name, email, cpf } = this.state;
    const { telefone, cep, endereco } = this.state;
    const { confirmBuy } = this.state;

    return (
      <div>
        <div>
          <h2>Revise seus produtos</h2>
          {productsInfo ? productsInfo.map(({ image, name, price, quantity }) => (
            <div key={ name }>
              <h4>{ name }</h4>
              <img src={ image } alt={ name } />
              <h4>{ price }</h4>
              <p>{`quantidade: ${quantity}`}</p>
            </div>
          )) : <p>sem produtos!</p>}
        </div>
        <form className="checkout-form" action="">
          {message ? <p data-testid="error-msg">Campos inválidos</p> : null}
          <h2>Informações do comprador</h2>
          <label htmlFor="input-name">
            <input
              data-testid="checkout-fullname"
              type="text"
              id="input-name"
              placeholder="nome completo"
              name="Name"
              value={ Name }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-email">
            <input
              data-testid="checkout-email"
              type="email"
              id="input-email"
              placeholder="Email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-cpf">
            <input
              data-testid="checkout-cpf"
              type="text"
              id="input-email"
              placeholder="CPF"
              name="cpf"
              value={ cpf }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-telefone">
            <input
              data-testid="checkout-phone"
              type="text"
              id="input-telefone"
              placeholder="Telefone"
              name="telefone"
              value={ telefone }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-cep">
            <input
              data-testid="checkout-cep"
              type="text"
              id="input-cep"
              placeholder="CEP"
              name="cep"
              value={ cep }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="input-endereço">
            <input
              data-testid="checkout-address"
              type="text"
              id="input-endereço"
              placeholder="Endereço"
              name="endereco"
              value={ endereco }
              onChange={ this.handleChange }
            />
          </label>
        </form>
        <div>
          <h2>Método de pagamento</h2>
          <label htmlFor="input-pag1">
            Boleto
            <input
              data-testid="ticket-payment"
              type="radio"
              id="input-pag1"
              onClick={ this.handleCheck }
            />
          </label>
          <h4>cartão de crédito</h4>
          <label htmlFor="input-pag1">
            Master Card
            <input
              data-testid="master-payment"
              type="radio"
              id="input-pag1"
              onClick={ this.handleCheck }
            />
          </label>
          <label htmlFor="input-pag1">
            Visa
            <input
              data-testid="visa-payment"
              type="radio"
              id="input-pag1"
              onClick={ this.handleCheck }
            />
          </label>
          <label htmlFor="input-pag1">
            Elo
            <input
              data-testid="elo-payment"
              type="radio"
              id="input-pag1"
              onClick={ this.handleCheck }
            />
          </label>
        </div>
        <button
          data-testid="checkout-btn"
          type="submit"
          onClick={ this.handleSubmit }
        >
          confirmar
        </button>
        {confirmBuy ? <Redirect to="/" /> : null }
        { confirmBuy ? localStorage.clear() : null }
      </div>
    );
  }
}

export default Checkout;

Checkout.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
    }).isRequired,
  }).isRequired,
};
