/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';

import { theme } from './utils/index';

const HomeStackNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
}, {
  navigationOptions: () => ({
    title: 'Browse',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: theme.PRIMARY,
      borderBottomWidth: 0,
    }
  })
});

const TabNav = createBottomTabNavigator(
  {
    Home: HomeStackNav,
  },
  {
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-bookmarks" size={30} color={tintColor}/>
      )
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        backgroundColor: theme.DARK,
      }
    },
  }
);

class AppMainNav extends Component {
  render () {
    return (
      <TabNav/>
    );
  }
}

export default AppMainNav;
