/* eslint-disable react/display-name */
import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import UserMangaScreen from './screens/UserMangaScreen';
import HomeScreen from './screens/HomeScreen';
import { Ionicons, Feather } from '@expo/vector-icons';
import { connect } from 'react-redux';
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator,
} from 'react-navigation-redux-helpers';

import { theme } from './utils/index';
import MangaScreen from './screens/MangaScreen';

const UserMangaNav = createStackNavigator({
  UserManga: {
    screen: UserMangaScreen,
  },
  Manga: {
    screen: MangaScreen,
  }
});

const HomeScreenNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Manga: {
    screen: MangaScreen,
  }
});

const TabNav = createBottomTabNavigator(
  {
    Home: HomeScreenNav,
    UserManga: UserMangaNav,
  },
  { initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <Ionicons name="md-bookmarks" size={30} color={tintColor}/>
        } else if (routeName === 'UserManga') {
          return <Feather name="bookmark" size={30} color={tintColor}/>
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

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const AppWithNavigationState = reduxifyNavigator(TabNav, "root");

const mapStateToProps = state => ({
  state: state.nav,
});

const AppMainNav = connect(mapStateToProps)(AppWithNavigationState);

export { TabNav, AppMainNav, navMiddleware };