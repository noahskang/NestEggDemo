import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class MarqueeHeaderComponent extends React.Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.marqueeContainer}>
          <Text style={styles.marqueeTitle}>{this.props.title}</Text>
          <Text style={styles.marqueeSubTitle}>{this.props.subTitle}</Text>
        </View>
      </View>
    );
  }
}

export default MarqueeHeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
  },
  marqueeContainer: {
    flexDirection: 'column'
  },
  marqueeTitle: {
    color: '#3C3C3B',
    fontFamily: 'AirbnbCereal-Bold',
    fontSize: 22
  },
  marqueeSubtitle: {
    color: '#3C3C3B',
    fontFamily: 'AirbnbCereal-Bold',
    fontSize: 20
  }
});
