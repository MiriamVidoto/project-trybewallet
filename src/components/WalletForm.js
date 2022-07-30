import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expenseAction, fetchCurrencies, fetchCurrencyQuotes } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      description: '',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { expenses, getCurrenciesQuotes } = this.props;
    await getCurrenciesQuotes();
    const { quotes } = this.props;
    this.setState({
      id: expenses.length,
      exchangeRates: quotes,
    }, () => {
      const { expenseDispatch } = this.props;
      expenseDispatch(this.state);
      this.setState({
        value: '',
        description: '',
      });
    });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor:
            <input
              data-testid="value-input"
              id="value"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              data-testid="currency-input"
              name="currency"
              id="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {
                currencies.map((elemento) => (
                  <option key={ elemento }>{elemento}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              data-testid="method-input"
              name="method"
              id="method"
              value={ method }
              onChange={ this.handleChange }
            >
              {
                methods.map((elemento) => (
                  <option key={ elemento }>{elemento}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              data-testid="tag-input"
              name="tag"
              id="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              {
                tags.map((elemento) => (
                  <option key={ elemento }>{elemento}</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="description">
            Descrição:
            <input
              data-testid="description-input"
              id="description"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  expenseDispatch: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  getCurrenciesQuotes: PropTypes.func.isRequired,
  quotes: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrencies()),
  getCurrenciesQuotes: () => dispatch(fetchCurrencyQuotes()),
  expenseDispatch: (expenseData) => dispatch(expenseAction(expenseData)),
});

const mapStateToProps = (store) => ({
  currencies: store.wallet.currencies,
  expenses: store.wallet.expenses,
  quotes: store.wallet.quotes,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
