import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Button from './src/components/button/Button';
import TextInput from './src/components/textInput/TextInput';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <Button title="Login" caption="Please Login" />
      <TextInput />
      <TextInput secureTextEntry />
      <TextInput />
      <TextInput />
      <TextInput />
      <TextInput />
    </SafeAreaView>
  );
};

export default App;
