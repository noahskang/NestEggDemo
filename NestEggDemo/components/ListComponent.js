import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';

export default class ListComponent extends React.Component {
  render() {
    const listElements = this.props.listObject.list;
    const title = this.props.listObject.title;
    return (
      <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <View>
          {
            listElements.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                titleStyle={styles.listItem}
              />
            ))
          }
        </View>
      </View>
    );
  }
}

// const username = navig ation.getParam('username', 'Noah');

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 14,
    color: '#1E272E'
  },
  listItem: {
    fontFamily: 'AirbnbCereal-Book',
    fontSize: 18,
    color: '#313131'
  }
});
