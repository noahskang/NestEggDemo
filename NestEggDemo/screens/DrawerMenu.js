import React from 'react';
import {
  Button,
  StyleSheet
} from 'react-native';
import { DrawerItems, createDrawerNavigator } from 'react-navigation';

export class DrawerMenu extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: () => (
      <Ionicons name="md-checkmark-circle" size={32} />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
