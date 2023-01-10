import React, { useState } from 'react';
import AppContext from './context';

const AppProvider = props => {
  const [isLogin, setIsLogin] = useState(false);
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  return (
    <AppContext.Provider
      value={{isLogin, setIsLogin, account, setAccount, password, setPassword}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
