import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, StyleSheet, Image, Text, Picker } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { Button } from 'react-native-elements';
import ListComponent from '../components/ListComponent';
import MarqueeHeaderComponent from '../components/MarqueeHeaderComponent';
const ActionList =  require('../config/ActionList').ActionList;

export default class ReportProblemScreen extends React.Component {
  state = {
    appliance: 'Refrigerator'
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'ReportProblem',
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
          title={'What Would You Like To Report a Problem For?'}
          subTitle={'(select \'other\' if none apply)'}
        />
        <Picker
          selectedValue={this.state.appliance}
          onValueChange={(itemValue, itemIndex) => this.setState({appliance: itemValue})} >
          <Picker.Item label="Refrigerator" value="Refrigerator" />
          <Picker.Item label="Laundry" value="Laundry" />
          <Picker.Item label="Toilet" value="Toilet" />
          <Picker.Item label="Stove" value="Stove" />
          <Picker.Item label="Leak" value="Leak" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
        <FormLabel
          fontFamily={'AirbnbCereal-Medium'}
          inputStyle={styles.inputText}
        >Please Describe Your Problem</FormLabel>
        <Button title='Submit Report' />
      </View>
    )
  }
}
// <FormInput onChangeText={someFunction}/>

const styles = StyleSheet.create({
  inputText: {
    fontFamily: 'AirbnbCereal-Book'
  },
  welcomeContainer: {
    backgroundColor: '#ffffff'
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  }
});
