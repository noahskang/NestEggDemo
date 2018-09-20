import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, Button } from 'react-native-elements';

class CardList extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.cardContainer}>
          <Card
            containerStyle={styles.cardStyle}
            imageStyle={styles.imageSize}
            image={require('../assets/images/Appliances.png')}
          >
            <Button buttonStyle={styles.buttonStyle} titleStyle={styles.cardTitleStyle} textStyle={styles.cardTitleStyle} title={'Appliances'} onPress={() => this.props.navigation.navigate('Appliances')} />
          </Card>
          <Card
            containerStyle={styles.cardStyle}
            imageStyle={styles.imageSize}
            image={require('../assets/images/Maintenance.png')}
          >
            <Button buttonStyle={styles.buttonStyle} title={'Maintenance'} textStyle={styles.cardTitleStyle} onPress={() => this.props.navigation.navigate('Maintenance')} />
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Card
            containerStyle={styles.cardStyle}
            imageStyle={styles.imageSize}
            image={require('../assets/images/Rent.png')}
          >
            <Button buttonStyle={styles.buttonStyle} textStyle={styles.cardTitleStyle} title={'Rent'} onPress={() => this.props.navigation.navigate('Rent')} />
          </Card>
          <Card
            containerStyle={styles.cardStyle}
            imageStyle={styles.imageSize}
            image={require('../assets/images/Utilities.png')}
          >
            <Button buttonStyle={styles.buttonStyle} textStyle={styles.cardTitleStyle} title={'Utilities'} onPress={() => this.props.navigation.navigate('Utilities')} />
          </Card>
        </View>
      </View>
    );
  }
}

export default withNavigation(CardList);

const styles = StyleSheet.create({
  cardStyle: {
    width: 150,
    height: 130,
    borderRadius: 5
  },
  cardTitleStyle: {
    fontFamily: 'AirbnbCereal-Book',
    color: '#313131',
    fontSize: 14,
    bottom: 10
  },
  imageSize: {
    height: 90,
    borderRadius: 5,
    overflow: 'hidden'
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonStyle: {
    backgroundColor: "rgba(92, 99,216, 0)",
    height: 40,
    width: 120,
    bottom: 5,
    right: 28
  }
});

// onPress={() => {this.props.navigation.navigate(l)}

// {
//   cardList.map((l, i) => {
//     const imagePath = '../assets/images/' + l;
//     return (
//     <Card title={l}
//     image={require(imagePath)}>
//     );
//   });
// }
