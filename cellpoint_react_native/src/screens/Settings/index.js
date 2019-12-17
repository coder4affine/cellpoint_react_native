import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Settings extends Component {
  displayName = 'Settings';

  onButtonPress = () => {
    const {replace} = this.props.navigation;
    replace('Dashboard');
  };

  render() {
    return (
      <View>
        <Text> Setting Page </Text>
        <Button title="Go To Dashboard" onPress={this.onButtonPress} />
      </View>
    );
  }
}
