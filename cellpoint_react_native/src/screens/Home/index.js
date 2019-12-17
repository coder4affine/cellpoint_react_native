import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Home extends Component {
  displayName = 'Home';

  onButtonPress = path => {
    this.props.navigation.navigate(path);
  };

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button
          title="Go To Settings"
          onPress={() => this.onButtonPress('Settings')}
        />
        <Button
          title="Go To Modal"
          onPress={() => this.onButtonPress('Modal')}
        />
        <Button
          title="Go To App"
          onPress={() => this.onButtonPress('App')}
        />
        <Button
          title="Go To Login"
          onPress={() => this.onButtonPress('Login')}
        />
      </View>
    );
  }
}
