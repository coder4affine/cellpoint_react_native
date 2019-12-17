import React from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import {ErrorMessage} from 'formik';
import Text from '../text/Text';

const TextInput = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors, setFieldValue}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <View>
      <RNTextInput
        style={{
          borderWidth: 0.5,
          backgroundColor: '#f4f2fb',
          paddingHorizontal: 8,
          margin: 10,
          borderColor: '#e8e8e8',
          height: 44,
          borderRadius: 4,
        }}
        onChangeText={txt => setFieldValue(field.name, txt)}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name}>
        {msg => <Text variant="error">{msg}</Text>}
      </ErrorMessage>
    </View>
  );
};

export default TextInput;

// import React, {PureComponent} from 'react';
// import {
//   TextInput as RNTextInput,
//   StyleSheet,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import Visibility from '../../assets/icons/visibility.svg';
// import VisibilityOff from '../../assets/icons/visibility_off.svg';

// export default class TextInput extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//       isFocused: false,
//       secureTextEntry: props.secureTextEntry,
//     };
//     console.log('constructor');
//     // Api call
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     console.log(props);
//     console.log(state);
//     return null;
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//     this.rnTextInput.focus();

//     this.timeout = setTimeout(() => {}, 1000);

//     // document.addEventListener('copy', () => {});
//   }

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   if (
//   //     this.state.text !== nextState.text ||
//   //     this.state.secureTextEntry !== nextState.secureTextEntry
//   //   ) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   //   // return false;
//   // }

//   componentDidUpdate(prevProps, prevState) {}

//   componentWillUnmount() {
//     clearTimeout(this.timeout);
//     // document.removeEventListener('copy', () => {});
//   }

//   render() {
//     console.log('render');
//     const {isFocused, text, secureTextEntry} = this.state;
//     const {secureTextEntry: propsSecureTextEntry} = this.props;
//     return (
//       <View style={{justifyContent: 'center'}}>
//         <RNTextInput
//           ref={ref => {
//             this.rnTextInput = ref;
//           }}
//           value={text}
//           style={{
//             borderWidth: StyleSheet.hairlineWidth,
//             backgroundColor: '#f4f2fb',
//             paddingHorizontal: 8,
//             margin: 10,
//             borderColor: isFocused ? '#6d55c0' : '#e8e8e8',
//             height: 44,
//             borderRadius: 4,
//           }}
//           secureTextEntry={!!secureTextEntry}
//           onFocus={() => this.setState({isFocused: true})}
//           onBlur={() => this.setState({isFocused: false})}
//           onChangeText={txt => this.setState({text: txt})}
//         />
//         {!!propsSecureTextEntry && (
//           <TouchableOpacity
//             style={{position: 'absolute', right: 20}}
//             onPress={() => this.setState({secureTextEntry: !secureTextEntry})}>
//             {secureTextEntry ? (
//               <Visibility height={24} width={24} />
//             ) : (
//               <VisibilityOff height={24} width={24} />
//             )}
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   }
// }
