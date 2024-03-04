'use client';

import AddToCart from '@/components/AddToCart';
import BuyButton from '@/components/BuyButton';
import { api } from '@/services/api';
import { post } from '@/services/request';
import React from 'react';

export default function Page() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      identifier: e.target.value,
      password: e.target.value
    };

    const res = post(api.login, {
      identifier: username,
      password
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <AddToCart />
      <BuyButton />
    </div>
  );
}
