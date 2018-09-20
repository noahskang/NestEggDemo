import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.navContainer}>
        <View style={styles.menuContainer}>
          <Icon name='menu' onPress={()=>this.props.navigation.openDrawer()}
          color={styles.darkColor}
          />
          <Text style={{top: 3, color: styles.darkColor}}>NOAH KANG</Text>
        </View>
        <Image
        source={require('../assets/images/nestegg-icon.png')}
        style={{ width: 70, height: 25 }}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
  },
  menuContainer: {
    width: 150,
    top: 1,
    flexDirection: 'row'
  },
  darkColor: '#3C3C3B'
});

export default withNavigation(LogoTitle);
