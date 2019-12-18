import React from 'react';
import PropTypes from 'prop-types';

import { Text as RNText } from 'react-native';
import styles from './styles';

const Text = ({ variant, style, ...props }) => {
  return <RNText allowFontScaling={false} style={[styles[variant], style]} {...props} />;
};

Text.propTypes = {
  variant: PropTypes.oneOf(['header', 'HeaderCaption']).isRequired,
  style: PropTypes.object,
};

Text.defaultProps = {
  style: {},
};

export default Text;
