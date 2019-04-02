import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

import styles from './styles.js';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.about}>About React Native!</Text>
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    );
  }
}
