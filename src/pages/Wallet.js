import React from 'react';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletForm />
        <Table />
      </div>
    );
  }
}

export default Wallet;
