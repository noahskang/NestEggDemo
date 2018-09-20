import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ApplianceScreen from '../screens/ApplianceScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';
import MessagesScreen from '../screens/MessagesScreen';
import RentScreen from '../screens/RentScreen';
import UtilitiesScreen from '../screens/UtilitiesScreen';
import LeaseScreen from '../screens/LeaseScreen';
import ReportProblemScreen from '../screens/ReportProblemScreen';
import MakePaymentScreen from '../screens/MakePaymentScreen';
import LogoTitle from '../components/LogoTitle';

const defaultHeaderNavigationOptions = {
  headerTitle: <LogoTitle />,
  headerStyle: {
    backgroundColor: '#ffffff',
    marginTop: -20,
    height: 40,
    borderBottomHeight: 0,
    borderBottomColor: '#ffffff'
  },
  headerTintColor: '#313131',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'AirbnbCereal-Light',
    tintColor: '#6D6D6D'
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Appliances: ApplianceScreen,
    Maintenance: MaintenanceScreen,
    Rent: RentScreen,
    Lease: LeaseScreen,
    ReportProblem: ReportProblemScreen,
    MakePayment: MakePaymentScreen,
    Utilities: UtilitiesScreen
  },
  {
    navigationOptions: defaultHeaderNavigationOptions
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

const MessagesStack = createStackNavigator({
  Messages: MessagesScreen
  },
  {
    navigationOptions: defaultHeaderNavigationOptions
  }
);

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-message{focused ? '' : '-outline'}` : 'md-message'}
    />
  ),
};

export const Tabs = createBottomTabNavigator({
  HomeStack,
  MessagesStack
});

const DrawerNavigator = createDrawerNavigator({
  Home:{
    screen: Tabs
  },
  Appliances: ApplianceScreen,
  Maintenance: MaintenanceScreen,
  Rent: RentScreen,
  Lease: LeaseScreen,
  'Report A Problem': ReportProblemScreen,
  'Make A Payment': MakePaymentScreen,
  'Utilities': UtilitiesScreen
},{
  initialRouteName: 'Home'
}
);

const StackNavigator = createStackNavigator({
    DrawerNavigator:{
      screen: DrawerNavigator
    }
  }
)

export default StackNavigator
