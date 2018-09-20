import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class ListComponent extends React.Component {
  render() {
    const listElements = this.props.listObject.list;
    const title = this.props.listObject.title;
    return (
      <View style={styles.containerStyle}>
        {
          listElements.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              titleStyle={styles.titleStyle}
              containerStyle={styles.listItem}
              onPress = {() => {this.props.navigation.navigate(l.route)}}
            />
          ))
        }
      </View>
    );
  }
}

export default withNavigation(ListComponent);

const styles = StyleSheet.create({
  containerStyle: {
    bottom: 10
  },
  titleStyle: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 14,
    color: '#1E272E'
  },
  listItem: {
    width: 350,
    height: 50,
    underlayColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cbd2d9'
  }
});
