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
      <header>
        <h1>TrybeWallet</h1>
        <div className="header-data">
          <span data-testid="email-field">
            { userEmail }
          </span>
          <div>
            <span data-testid="total-field">
              { `Despesa total: ${totalExpenses.toFixed(2)} ` }
            </span>
            <span data-testid="header-currency-field">
              BRL
            </span>
          </div>
        </div>
      </header>
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
