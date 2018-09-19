import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ApplianceScreen from '../screens/ApplianceScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LogoTitle from '../components/LogoTitle';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Appliance: ApplianceScreen
  },
  {
    navigationOptions: {
      headerTitle: <LogoTitle />,
      headerStyle: {
        backgroundColor: '#ffffff',
      },
      headerTintColor: '#313131',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'AirbnbCereal-Light'
      }
    }
    }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  drawerLabel: 'LinksScreen',
  drawerIcon: () => (
    <Icon name='menu' />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),

export default createDrawerNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
})
// export default createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack
// });
// we have to create multiple stacks here because we want the navigation bar to appear on ALL The pages.
