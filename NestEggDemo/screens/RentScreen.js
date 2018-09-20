import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, StyleSheet, Image, Text } from 'react-native';
import MarqueeHeaderComponent from '../components/MarqueeHeaderComponent';
import ListComponent from '../components/ListComponent';
const ActionList =  require('../config/ActionList').ActionList;

export default class RentScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Manage Rent',
      headerStyle: {
        backgroundColor: '#ffffff',
        marginTop: -22
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
        <MarqueeHeaderComponent
          title={'Your Next Payment is Due:'}
          subTitle={'October 12'}
        />
        <ListComponent listObject={ActionList.Rent} />
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
