import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '@src/pages/detail';
import Home from '@src/pages/home';
import React from 'react';

const Stack = createNativeStackNavigator();

const HomeRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default HomeRouter;
