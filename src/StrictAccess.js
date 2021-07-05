import React from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends React.Component {
  render() {
    const { user } = this.props;

    const sucess = (
      <div>
        <p>Welcome joao!</p>
      </div>
    );

    function validacao(user) {
      if (user.username === 'joa' && user.password === '1234') {
        return sucess;
      } else {
        alert('Access denied');
        return <Redirect to="/" />;
      }
    }

    return validacao(user);
  }
}

export default StrictAccess;
