import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, Card } from 'react-native-elements'
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import HeaderComponent from '../components/HeaderComponent';
import CardList from '../components/CardList';
// import ListComponent from '../components/ListComponent';
// const ActionList =  require('../config/ActionList').ActionList;

const username = 'NOAH';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <HeaderComponent />
          <Image style={{bottom: 25}} source={require('../assets/images/apt-inside.png')} />
          <Text style={styles.manageApt}>Manage Your Apartment</Text>
          <CardList />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'AirbnbCereal-Bold'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
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
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  manageApt: {
    color: '#6D6D6D',
    margin: 10,
    fontFamily: 'AirbnbCereal-Medium',
    fontSize: 18
  }
});

// <Button
//   title="Go to Settings"
//   onPress={() => this.props.navigation.navigate('Settings')}
// />
// <Button
//   title="Report A Problem"
//   onPress={() => {
//       this.props.navigation.navigate('Appliance', {
//       username
//     });
//   }}
// />

// <View style={styles.tabBarInfoContainer}>
// <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>
//
// <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
// <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
// </View>
// </View>
