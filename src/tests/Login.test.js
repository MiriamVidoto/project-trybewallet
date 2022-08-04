import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App'

describe('Teste do componente Login',  () => {
  test('Se na página existe o título Login', () =>{
    renderWithRouterAndRedux(<App />);
    const titleLogin = screen.getByRole('heading', {name: /Login/i, level:1});
    expect(titleLogin).toBeDefined();
  });
  test('Se na página existe o campo de email', () =>{
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeDefined();
  });
  test('Se na página existe o campo de senha', () =>{
    renderWithRouterAndRedux(<App />);
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeDefined();
  })
  test('Se na página existe o botão com texto entrar', () =>{
    renderWithRouterAndRedux(<App />);
    const buttonEntrar = screen.getByRole('button', {name: /Entrar/i});
    expect(buttonEntrar).toBeDefined();
  })
  test('Se o botão inicia desabilitado e habilita com o email e senha corretos', () =>{
    const {history, store } = renderWithRouterAndRedux(<App />);
    const buttonEntrar = screen.getByRole('button', {name: /Entrar/i});
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');

    expect(buttonEntrar).toBeDisabled();
    userEvent.type(inputEmail, 'alguem@alguem.com');
    userEvent.type(inputPassword, '123456');
    expect(buttonEntrar).not.toBeDisabled();
    userEvent.click(buttonEntrar);
    expect(history.location.pathname).toBe('/carteira');

    const state = store.getState();
    console.log(state);

    expect(state.user.email).toBe('alguem@alguem.com')
  })
})