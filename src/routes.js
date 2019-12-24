import React from 'react';
import { Image } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/AppLogo/appLogo.png';

import SignIn from './pages/SignIn';
import CheckIn from './pages/CheckIn';
import HelpOrder from './pages/HelpOrder';
import ReadHelpOrder from './pages/HelpOrder/ReadHelpOrder';
import NewHelpOrder from './pages/HelpOrder/NewHelpOrder';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: SignIn,
        App: createBottomTabNavigator(
          {
            CheckIn,
            HelpOrder: {
              screen: createStackNavigator(
                {
                  HelpOrder,
                  ReadHelpOrder,
                  NewHelpOrder,
                },
                {
                  headerBackTitleVisible: false,
                  defaultNavigationOptions: {
                    headerTitle: () => <Image source={logo} />,
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Help Orders',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999',
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
