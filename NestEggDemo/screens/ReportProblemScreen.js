import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, ScrollView, StyleSheet, Image, Text, Picker } from 'react-native';
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
      headerTitle: 'Report A Problem',
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
      <ScrollView style={styles.welcomeContainer}>
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
        <View style={{bottom: 20}}>
          <FormLabel
            fontFamily={'AirbnbCereal-Medium'}
            labelStyle={styles.formText}
          >Please Describe Your Problem</FormLabel>
          <FormInput
            inputStyle={styles.inputText}
            fontFamily='AirbnbCereal-Medium'
          >At least 8 characters </FormInput>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Button title='Submit Report'
            borderRadius={100}
            buttonStyle={{width: 160, height: 40, backgroundColor: '#24AC9B', marginTop: 20}}
            color='#ffffff'
          />
          </View>
        </View>
      </ScrollView>
    )
  }
}
// <FormInput onChangeText={someFunction}/>

const styles = StyleSheet.create({
  formText: {
    fontSize: 18,
    color: '#313131',
  },
  inputText: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 18,
    color: '#919191',
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
