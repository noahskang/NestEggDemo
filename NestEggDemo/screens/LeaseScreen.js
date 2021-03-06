import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class LeaseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Lease Information',
      headerStyle: {
        backgroundColor: '#ffffff',
        marginTop: -20
      }
    }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    const { navigation } = this.props;
    const username = navigation.getParam('username', 'Noah');
    return (
      <View style={styles.welcomeContainer}>
        <Text>Your Lease Information Will Appear Here</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});
