import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeRouter from '@src/pages/home-router';
import Profile from '@src/pages/profile';
import Setting from '@src/pages/setting';
import React from 'react';
import { Image, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          //focused為連結到該頁面的意思
          let iconPath;
          let iconSize = focused ? 40 : 24;
          let iconTop = focused ? 0 : 7.5;
          if (route.name === '首頁') {
            iconPath = require('@src/assets/images/home.png');
          } else if (route.name === '設定') {
            iconPath = require('@src/assets/images/setting.png');
          } else if (route.name == '我的') {
            iconPath = require('@src/assets/images/user.png');
          }
          return (
            <Image
              style={{
                width: iconSize,
                height: iconSize,
                top: iconTop,
                zIndex: 10
              }}
              source={iconPath}
            />
          );
        },
        tabBarLabel: ({ focused, color }) => {
          return (
            <Text
              style={{
                fontSize: 12,
                marginTop: 9,
                marginBottom: 7,
                padding: 0,
                display: focused ? 'none' : 'flex',
                color: '#707070'
              }}
            >
              {route.name}
            </Text>
          );
        },
        tabBarActiveTintColor: '#fff',
        tabBarActiveBackgroundColor: '#98c5ed',
        tabBarInactiveTintColor: '#707070',
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: 0,
          marginBottom: 8,
          padding: 0
        },
        tabBarStyle: {
          width: '100%',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1
        }
      })}
    >
      <Tab.Screen name="我的" component={Profile} />
      <Tab.Screen name="首頁" component={HomeRouter} />
      <Tab.Screen name="設定" component={Setting} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
