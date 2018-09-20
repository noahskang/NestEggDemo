import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card } from 'react-native-elements';

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
            <Text style={styles.titleStyle}>Appliances</Text>
          </Card>
          <Card
            containerStyle={styles.cardStyle}
            imageStyle={styles.imageSize}
            image={require('../assets/images/Maintenance.png')}
          >
            <Text style={styles.titleStyle}>Maintenance</Text>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Card
            containerStyle={styles.cardStyle}
            imageStyle={styles.imageSize}
            image={require('../assets/images/Rent.png')}
          >
            <Text style={styles.titleStyle}>Rent</Text>
          </Card>
          <Card
            containerStyle={styles.cardStyle}
            imageStyle={styles.imageSize}
            image={require('../assets/images/Utilities.png')}
          >
            <Text style={styles.titleStyle}>Utilities</Text>
          </Card>
        </View>
      </View>
    );
  }
}

export default withNavigation(CardList);

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 14,
    color: '#1E272E'
  },
  cardStyle: {
    width: 150,
    height: 130,
    borderRadius: 5
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
  }
});

// onPress={() => {this.props.navigation.navigate(l)}

// {
//   cardList.map((l, i) => {
//     const imagePath = '../assets/images/' + l;
//     return (
//     <Card title={l}
//     image={require(imagePath)}>
//       <Text style={styles.titleStyle} />
//     </Card>
//     );
//   });
// }
