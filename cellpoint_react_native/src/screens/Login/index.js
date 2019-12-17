import React, {Component} from 'react';
import {View, Image, PixelRatio, SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';
import Text from '../../components/text/Text';
import Button from '../../components/button/Button';
import styles from './styles';
import theme from '../../utils/theme';

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
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
            onPress={() => {}}
            containerStyle={{backgroundColor: theme.primary.main}}
            textStyle={{color: theme.primary.contrastText}}
          />
          <Button
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
