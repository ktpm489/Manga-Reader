/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import UserMangaScreen from './screens/UserMangaScreen';
import HomeScreen from './screens/HomeScreen';
import { Ionicons, Feather } from '@expo/vector-icons';

import { theme } from './utils/index';

const UserMangaNav = createStackNavigator({
  UserManga: {
    screen: UserMangaScreen,
  }
}, {
  navigationOptions: () => ({
    title: 'My Manga',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: theme.PRIMARY,
      borderBottomWidth: 0,
    }
  })
});

const HomeScreenNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
}, {

});

const TabNav = createBottomTabNavigator(
  {
    Home: HomeScreenNav,
    UserManga: UserMangaNav,
  },
  { initialRouteName: 'UserManga',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <Feather name="bookmark" size={30} color={tintColor}/>
        } else if (routeName === 'UserManga') {
          return <Ionicons name="md-bookmarks" size={30} color={tintColor}/>
        }
      }
    }),
    swipeEnabled: true,
    lazy: true,
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
