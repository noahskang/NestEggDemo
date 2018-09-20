import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { GiftedChat } from 'react-native-gifted-chat';

export default class MessagesScreen extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  static navigationOptions = {
    drawerLabel: 'Messages',
    drawerIcon: ({ tintColor }) => (
      <Icon name='menu' style={styles.icon} />
    ),
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
