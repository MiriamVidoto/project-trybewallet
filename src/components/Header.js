import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userEmail, expenses } = this.props;
    const totalExpenses = expenses.reduce((acc, crr) => (
      acc + (Number(crr.value) * Number(crr.exchangeRates[crr.currency].ask))
    ), 0);

    return (
      <div>
        <span data-testid="email-field">
          { `Email: ${userEmail}` }
        </span>
        <span>Despesa total:</span>
        <span data-testid="total-field">
          { totalExpenses.toFixed(2) }
        </span>
        <span data-testid="header-currency-field">
          BRL
        </span>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  userEmail: store.user.email,
  expenses: store.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
