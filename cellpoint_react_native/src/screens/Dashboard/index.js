import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Button } from 'react-native';

const Dashboard = ({ navigation: { popToTop } }) => {
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

Dashboard.propTypes = {
  navigation: PropTypes.objectOf({
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};

export default Dashboard;
