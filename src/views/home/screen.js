import React, {Component} from 'react';
import {Platform, Button, Text, TextInput, View} from 'react-native';

import config from './../../config';
import styles from './styles.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'world'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to {config('app.name', 'MyAwesomeEnterpriseApp')}!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

        <TextInput
          style={styles.textInput}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
        />
        <Button title="Say hi!" onPress={() => this.props.sayHi({name: this.state.name})} />
        <Text style={styles.hi}>Hello {this.props.name}!</Text>

        <Button title="Go to About" onPress={() => this.props.navigation.navigate('About')} />
      </View>
    );
  }
}
