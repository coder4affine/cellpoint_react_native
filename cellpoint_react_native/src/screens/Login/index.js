import React, {Component} from 'react';
import {View, PixelRatio, SafeAreaView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Text from '../../components/text/Text';
import Button from '../../components/button/Button';
import styles from './styles';
import theme from '../../utils/theme';
import {LOAD_USERS, REQUEST} from '../../constants/actionTypes';

class Login extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const {loading} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        {loading && (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator animating={true} size="large" />
          </View>
        )}
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <FastImage
            source={require('../../assets/images/checked.png')}
            style={{
              height: PixelRatio.getPixelSizeForLayoutSize(100),
              width: PixelRatio.getPixelSizeForLayoutSize(100),
            }}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text variant="header">Get Engaged</Text>
          <Text variant="HeaderCaption">Tan Tock Seng Hospital</Text>
        </View>
        <View style={{flex: 2}}>
          <Button
            onPress={() => this.props.navigation.navigate('Register')}
            containerStyle={{backgroundColor: theme.primary.main}}
            textStyle={{color: theme.primary.contrastText}}
          />
          <Button
            onPress={() => this.props.changeLocale({locale: 'es'})}
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0.5,
              borderColor: '#fff',
            }}
            textStyle={{color: theme.primary.contrastText}}
          />
        </View>
        <View>
          <Text variant="caption">Version 1 (60)</Text>
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    locale: state.locale,
    users: state.users,
    loading: state.loading[LOAD_USERS],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: payload => dispatch({type: 'CHANGE_LOCALE', payload}),
    loadUsers: () => dispatch({type: `${LOAD_USERS}_${REQUEST}`}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
