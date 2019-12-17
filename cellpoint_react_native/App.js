import React from 'react';
import {Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './src/screens/Home';
import SettingsScreen from './src/screens/Settings';
import DashboardScreen from './src/screens/Dashboard';
import LoginScreen from './src/screens/Login';
import Modal from './src/screens/Modal';
import DashboardIcon from './src/assets/icons/dashboard.svg';
import HomeIcon from './src/assets/icons/home.svg';
import SettingsIcon from './src/assets/icons/settings_applications.svg';

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
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          return <HomeIcon height={24} width={24} style={{color: tintColor}} />;
        } else if (routeName === 'Settings') {
          return (
            <SettingsIcon height={24} width={24} style={{color: tintColor}} />
          );
        } else if (routeName === 'Dashboard') {
          return (
            <DashboardIcon height={24} width={24} style={{color: tintColor}} />
          );
        }
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
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => {
        return {
          title: 'Settings',
        };
      },
    },
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: () => {
        return {
          title: 'Settings',
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

const App = createSwitchNavigator({
  Login: {
    screen: MainNavigator,
  },
  App: {
    screen: AppNavigator,
  },
});

export default createAppContainer(App);
