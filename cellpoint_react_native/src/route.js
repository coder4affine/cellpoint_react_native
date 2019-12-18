/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './screens/Home';
import SettingsScreen from './screens/Settings';
import DashboardScreen from './screens/Dashboard';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import UsersScreen from './screens/Users';
import Modal from './screens/Modal';
import DashboardIcon from './assets/icons/dashboard.svg';
import HomeIcon from './assets/icons/home.svg';
import SettingsIcon from './assets/icons/settings_applications.svg';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Dashboard: {
      screen: DashboardScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <HomeIcon height={24} width={24} style={{ color: tintColor }} />;
        }
        if (routeName === 'Settings') {
          return <SettingsIcon height={24} width={24} style={{ color: tintColor }} />;
        }
        if (routeName === 'Dashboard') {
          return <DashboardIcon height={24} width={24} style={{ color: tintColor }} />;
        }
        return null;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: () => {
        return {
          headerTransparent: true,
        };
      },
    },
    Users: {
      screen: UsersScreen,
      navigationOptions: () => {
        return {
          headerTransparent: true,
        };
      },
    },
  },
  {
    defaultNavigationOptions: () => {
      return {
        headerTintColor: 'red',
      };
    },
  },
);

const TabStackNavigator = createStackNavigator({
  AppTab: TabNavigator,
});

const AppNavigator = createStackNavigator(
  {
    App: {
      screen: TabStackNavigator,
    },
    Modal: {
      screen: Modal,
    },
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export const App = createSwitchNavigator({
  Login: {
    screen: MainNavigator,
  },
  App: {
    screen: AppNavigator,
  },
});

export default createReduxContainer(App);
