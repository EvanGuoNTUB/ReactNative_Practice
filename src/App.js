import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigator from './components/shared/tab-navigator';
import AppProvider from './context/provider';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
