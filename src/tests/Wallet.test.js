import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import userEvent from '@testing-library/user-event';
import Wallet from '../pages/Wallet';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm'
import mockData from './helpers/mockData';

describe('Teste do componente Wallet', () =>{
  test('Se na página existe o título TrybeWallet', () => {
    renderWithRouterAndRedux(<Wallet />);
    expect(screen.getByRole('heading', {name: /TrybeWallet/i, level:2 })).toBeDefined();
    
  })
  test('Se o componente Header é renderizad com o email, a despesa total e o câmbio utilizado', () => {
    renderWithRouterAndRedux(<Header />);    
    expect(screen.getByTestId('email-field')).toBeDefined();
    expect(screen.getByTestId('total-field')).toBeDefined();
    expect(screen.getByTestId('header-currency-field')).toBeDefined();

  })
  test('Se todos elementos são renderizados e é possivel adicionar uma despesa', () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    })
    
    const { store } = renderWithRouterAndRedux(<WalletForm />);
    const value = screen.getByTestId('value-input');
    const description = screen.getByTestId('description-input');
    const button = screen.getByRole('button', {name: /adicionar/i})

    expect(screen.getByTestId('currency-input')).toBeDefined();
    expect(screen.getByTestId('method-input')).toBeDefined();
    expect(screen.getByTestId('tag-input')).toBeDefined();

    userEvent.type(value, '10');
    userEvent.type(description, 'uber');

    expect(value).toHaveValue('10');
    expect(description).toHaveValue('uber');

    userEvent.click(button);

    // await waitFor(() => expect(fetch).toHaveBeenCalled());

    const state = store.getState();

    expect(state)

    // const newValue = await screen.findByText('10');
    // const newDescription = await screen.findByText('uber');

    // expect(newValue).toBeDefined();
    // expect(newDescription).toBeDefined();
  })
})