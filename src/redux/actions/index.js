export const loginAction = (email) => ({
  type: 'USER_EMAIL',
  email,
});

export const expenseAction = (expenseData) => ({
  type: 'ADD_DATA_EXPENSE',
  expenseData,
});

export const fetchCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const currencies = Object.keys(data).filter((curr) => curr !== 'USDT');
  dispatch({
    type: 'GET_CURRENCIES',
    currencies,
  });
};

export const fetchCurrencyQuotes = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  dispatch({
    type: 'GET_QUOTAS',
    quotes: data,
  });
};
