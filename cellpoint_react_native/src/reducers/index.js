import {combineReducers} from 'redux';
import locale from './localeReducer';
import users from './usersReducer';

export default combineReducers({
  locale,
  users,
});
