import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      buttonDisabled: true,
    };
  }

validateButton = () => {
  const { email, password } = this.state;
  const minPassword = 6;
  const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validatePasswordLength = password.length >= minPassword;
  const validateEmail = email.match(regex);
  return validatePasswordLength && validateEmail;
}

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.setState({ buttonDisabled: !this.validateButton() }));
  };

  handleClick = () => {
    const { history, loginDispatch } = this.props;
    const { email } = this.state;
    loginDispatch(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            name="password"
            data-testid="password-input"
            placeholder="min 6 dígitos"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ buttonDisabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  loginDispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (email) => dispatch(loginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
