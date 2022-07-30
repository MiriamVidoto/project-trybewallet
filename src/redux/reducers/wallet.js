// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'ADD_DATA_EXPENSE':
    return { ...state, expenses: [...state.expenses, action.expenseData] };
  case 'GET_CURRENCIES':
    return { ...state, currencies: action.currencies };
  case 'GET_QUOTAS':
    return { ...state, quotes: action.quotes };
  default:
    return state;
  }
};

export default wallet;
