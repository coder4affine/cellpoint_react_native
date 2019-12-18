import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text, View, Button } from 'react-native';

export default class Home extends Component {
  displayName = 'Home';

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  onButtonPress = path => {
    const {
      navigation: { navigate },
    } = this.props;
    navigate(path);
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button title="Go To Settings" onPress={() => this.onButtonPress('Settings')} />
        <Button title="Go To Modal" onPress={() => this.onButtonPress('Modal')} />
        <Button title="Go To App" onPress={() => this.onButtonPress('App')} />
        <Button title="Go To Login" onPress={() => this.onButtonPress('Login')} />
      </View>
    );
  }
}
