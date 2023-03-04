import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newExpensesAction, editAction } from '../redux/actions';

class Table extends Component {
  handleClickDelet = ({ target }) => {
    const { expenses, newExpensesDispatch } = this.props;
    const { id } = target;
    const newExpenses = expenses.filter((expense) => expense.id !== Number(id));
    newExpensesDispatch(newExpenses);
  }

  handleClickEdit = ({ target }) => {
    const { editDispatch } = this.props;
    const { id } = target;
    editDispatch(id);
  }

  render() {
    const { expenses } = this.props;
    return (
      <div className="expenses-table">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((expense) => (
                <tr key={ expense.id }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{Number(expense.value).toFixed(2)}</td>
                  <td>{expense.exchangeRates[expense.currency].name}</td>
                  <td>
                    {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
                  </td>
                  <td>
                    { Number((expense.value)
                    * (expense.exchangeRates[expense.currency].ask)).toFixed(2)}
                  </td>
                  <td>BRL</td>
                  <td>
                    <button
                      type="button"
                      data-testid="edit-btn"
                      id={ expense.id }
                      onClick={ this.handleClickEdit }
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      id={ expense.id }
                      onClick={ this.handleClickDelet }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  newExpensesDispatch: PropTypes.func.isRequired,
  editDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  newExpensesDispatch: (newExpenses) => dispatch(newExpensesAction(newExpenses)),
  editDispatch: (id, newExpensesData) => (
    dispatch(editAction(id, newExpensesData))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
