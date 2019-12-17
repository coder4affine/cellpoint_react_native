import {StyleSheet} from 'react-native';
import {normalize} from '../../utils';

const styles = StyleSheet.create({
  header: {
    fontSize: normalize(36),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  HeaderCaption: {
    fontSize: normalize(16),
    lineHeight: 22,
    color: '#ffffff',
  },
  caption: {
    fontSize: normalize(13),
    lineHeight: 22,
    textAlign: 'center',
    color: '#9b9b9b',
  },
  buttonText: {
    fontSize: normalize(16),
    fontWeight: '500',
    lineHeight: 22,
  },
  error: {
    fontSize: 30,
    fontWeight: '400',
    color: 'red',
  },
});

export default styles;
