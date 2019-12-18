import React from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import Text from '../../components/text/Text';

const Users = ({users}) => {
  const renderItem = ({item}) => {
    console.warn('item', item);
    return (
      <View>
        <Text variant="error">{item.id}</Text>
        <Text variant="error">{item.username}</Text>
        <Text variant="error">{item.password}</Text>
      </View>
    );
  };
  const keyExtractor = item => `${item.id}`;

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
