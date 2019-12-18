import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const Button = ({ title, caption }) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 4,
      }}
    >
      <Text
        style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 20 }}
        numberOfLines={1}
        selectable
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <Text
        style={{ fontSize: 16, fontWeight: '500', marginHorizontal: 20 }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {caption}
      </Text>
    </View>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
};

Button.defaultProps = {
  title: 'Submit',
  caption: '',
};

export default Button;

// import React, {Component} from 'react';
// import {Text, View} from 'react-native';

// export default class Button extends Component {
//   render() {
//     const {title, caption} = this.props;
//     return (
//       <View
//         style={{
//           backgroundColor: 'red',
//           height: 44,
//           justifyContent: 'center',
//           alignItems: 'center',
//           margin: 10,
//           borderRadius: 4,
//         }}>
//         <Text
//           style={{fontSize: 16, fontWeight: '500', marginHorizontal: 20}}
//           numberOfLines={1}
//           ellipsizeMode="tail">
//           {title}
//         </Text>
//         <Text
//           style={{fontSize: 16, fontWeight: '500', marginHorizontal: 20}}
//           numberOfLines={1}
//           ellipsizeMode="tail">
//           {caption}
//         </Text>
//       </View>
//     );
//   }
// }
