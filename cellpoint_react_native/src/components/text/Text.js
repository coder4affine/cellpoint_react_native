import React from 'react';
import {Text as RNText} from 'react-native';
import styles from './styles';

const Text = ({variant, style, ...props}) => {
  return (
    <RNText
      allowFontScaling={false}
      style={[styles[variant], style]}
      {...props}
    />
  );
};

export default Text;
