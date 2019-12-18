/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, PixelRatio, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Text from '../../components/text/Text';
import Button from '../../components/button/Button';
import styles from './styles';
import theme from '../../utils/theme';
import { LOAD_USERS, REQUEST } from '../../constants/actionTypes';
// eslint-disable-next-line import/no-named-as-default
import ThemeProvider, { ThemeConsumer } from '../../context/themeContext';
import UserContext, { UserConsumer } from '../../context/userContext';

class Login extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    loadUsers: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  render() {
    const {
      loading,
      navigation: { navigate },
    } = this.props;

    return (
      <ThemeProvider>
        <UserContext>
          <SafeAreaView style={styles.container}>
            {loading && (
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator animating size="large" />
              </View>
            )}
            <ThemeConsumer>
              {value => {
                return (
                  <View>
                    <Text variant="error">{value.theme}</Text>
                    <Button
                      onPress={() => value.changeTheme(value.theme === 'dark' ? 'light' : 'dark')}
                      title="Change Theme"
                    />
                  </View>
                );
              }}
            </ThemeConsumer>
            <UserConsumer>
              {value => {
                return (
                  <View>
                    {value.loading && <Text variant="error">Loading...</Text>}
                    {value.error && <Text variant="error">Error...</Text>}
                    {value.users && <Text variant="error">{value.users.length}</Text>}
                    <Button onPress={() => value.loadUser()} title="Change Theme" />
                  </View>
                );
              }}
            </UserConsumer>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
              <FastImage
                source={require('../../assets/images/checked.png')}
                style={{
                  height: PixelRatio.getPixelSizeForLayoutSize(100),
                  width: PixelRatio.getPixelSizeForLayoutSize(100),
                }}
              />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <Text variant="header">Get Engaged</Text>
              <Text variant="HeaderCaption">Tan Tock Seng Hospital</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Button
                onPress={() => navigate('Register')}
                containerStyle={{ backgroundColor: theme.primary.main }}
                textStyle={{ color: theme.primary.contrastText }}
              />
              <Button
                onPress={() => navigate('App')}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 0.5,
                  borderColor: '#fff',
                }}
                textStyle={{ color: theme.primary.contrastText }}
              />
            </View>
            <View>
              <Text variant="caption">Version 1 (60)</Text>
            </View>
          </SafeAreaView>
        </UserContext>
      </ThemeProvider>
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
    changeLocale: payload => dispatch({ type: 'CHANGE_LOCALE', payload }),
    loadUsers: () => dispatch({ type: `${LOAD_USERS}_${REQUEST}` }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
