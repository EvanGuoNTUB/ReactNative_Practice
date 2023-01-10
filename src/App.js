import React from 'react';
import TabNavigator from './components/shared/tab-navigator';
import AppProvider from './context/provider';

const App = () => {
  return (
    <AppProvider>
      <TabNavigator />
    </AppProvider>
  );
};

export default App;
