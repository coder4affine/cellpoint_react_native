import React, {Component} from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Visibility from '../../assets/icons/visibility.svg';
import VisibilityOff from '../../assets/icons/visibility_off.svg';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isFocused: false,
      secureTextEntry: props.secureTextEntry,
    };
  }

  render() {
    console.warn('render');
    const {isFocused, text, secureTextEntry} = this.state;
    const {secureTextEntry: propsSecureTextEntry} = this.props;
    return (
      <View style={{justifyContent: 'center'}}>
        <RNTextInput
          value={text}
          style={{
            borderWidth: StyleSheet.hairlineWidth,
            backgroundColor: '#f4f2fb',
            paddingHorizontal: 8,
            margin: 10,
            borderColor: isFocused ? '#6d55c0' : '#e8e8e8',
            height: 44,
            borderRadius: 4,
          }}
          secureTextEntry={!!secureTextEntry}
          onFocus={() => this.setState({isFocused: true})}
          onBlur={() => this.setState({isFocused: false})}
          onChangeText={txt => this.setState({text: txt})}
        />
        {!!propsSecureTextEntry && (
          <TouchableOpacity
            style={{position: 'absolute', right: 20}}
            onPress={() => this.setState({secureTextEntry: !secureTextEntry})}>
            {secureTextEntry ? (
              <Visibility height={24} width={24} />
            ) : (
              <VisibilityOff height={24} width={24} />
            )}
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
