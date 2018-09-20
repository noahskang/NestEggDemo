import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.marqueeContainer}>
          <Text style={styles.marqueeTitle}>{'5725 S Kimbark Ave.'}</Text>
          <Text style={styles.marqueeTitle}>{'Apt. 3'}</Text>
        </View>
        <View style={styles.iconHeaderContainer}>
        //https://react-native-training.github.io/react-native-elements/docs/icon.html
          <Icon name='info' color='#24AC9B' />
          <Icon name='message' color='#24AC9B' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
  },
  iconHeaderContainer: {
    flexDirection: 'column'
  },
  marqueeContainer: {
    flexDirection: 'column'
  },
  marqueeTitle: {
    color: '#3C3C3B',
    fontFamily: 'AirbnbCereal-Bold',
    fontSize: 24
  },
  marqueeSubtitle: {
    color: '#3C3C3B',
    fontFamily: 'AirbnbCereal-Bold',
    fontSize: 20
  }
});
