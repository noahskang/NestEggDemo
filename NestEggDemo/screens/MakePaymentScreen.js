import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import MarqueeHeaderComponent from '../components/MarqueeHeaderComponent';

export default class MakePaymentScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Make Payment',
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
        <MarqueeHeaderComponent
          title={'Your Next Payment is Due:'}
          subTitle={'October 12'}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Pay Now'
          borderRadius={100}
          buttonStyle={{width: 160, height: 40, backgroundColor: '#24AC9B', marginTop: 20}}
          color='#ffffff'
        />
        </View>
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
