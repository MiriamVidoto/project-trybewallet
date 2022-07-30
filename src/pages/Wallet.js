import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <h2>TrybeWallet</h2>
        <Header />
        <WalletForm />
        <Table />
      </div>
    );
  }
}

export default Wallet;
