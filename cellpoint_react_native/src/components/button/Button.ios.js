import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight} from 'react-native';
import Text from '../text/Text';

const Button = ({title, caption, containerStyle, textStyle, ...props}) => {
  return (
    <TouchableHighlight
      {...props}
      style={[
        {
          backgroundColor: 'green',
          height: 44,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          borderRadius: 4,
        },
        containerStyle,
      ]}>
      <Text
        style={textStyle}
        variant="buttonText"
        numberOfLines={1}
        selectable={true}
        ellipsizeMode="tail">
        {title}
      </Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

Button.defaultProps = {
  title: 'Submit',
};

export default memo(Button);

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
