import React from 'react';
import {View, Text, Button} from 'react-native';

const Dashboard = ({navigation: {popToTop}}) => {
  const buttonPress = () => {
    popToTop();
  };

  return (
    <View>
      <Text>Dashboard Page</Text>
      <Button title="Go To Home" onPress={buttonPress} />
    </View>
  );
};

export default Dashboard;
