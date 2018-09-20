import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ApplianceScreen from '../screens/ApplianceScreen';
import MaintenanceScreen from '../screens/ApplianceScreen';
import RentScreen from '../screens/ApplianceScreen';
import UtilitiesScreen from '../screens/ApplianceScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LogoTitle from '../components/LogoTitle';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Appliances: ApplianceScreen,
    Maintenance: ApplianceScreen,
    Rent: ApplianceScreen,
    Utilities: ApplianceScreen
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
  drawerLabel: 'Home',
  drawerIcon: () => (
    <Icon name='menu' />
  ),
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

// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });
//
// LinksStack.navigationOptions = {
//   drawerLabel: 'LinksScreen',
//   drawerIcon: () => (
//     <Icon name='menu' />
//   ),
// };

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });
//
// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
//     />
//   ),
// };
//
export default createDrawerNavigator({
  HomeStack
});
// LinksStack,
// SettingsStack
// export default createBottomTabNavigator({
//   HomeStack,
//   LinksStack,
//   SettingsStack
// });
// we have to create multiple stacks here because we want the navigation bar to appear on ALL The pages.
