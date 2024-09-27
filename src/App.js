import React, { useState } from 'react';
import MainComponent from './containers/MainComponent';
import LoginForm from './components/LoginForm';
import DataTable from './components/DataTable';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <MainComponent>
      {!isLoggedIn ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <DataTable />
      )}
    </MainComponent>
  );
};

export default App;
