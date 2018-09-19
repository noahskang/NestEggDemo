import React from 'react';
import { Text, Image, View } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <View>
        <Image
        source={require('../assets/images/nestegg-icon.png')}
        style={{ width: 100, height: 30 }}
        />
        <Text>NOAH</Text>
      </View>
    );
  }
}
