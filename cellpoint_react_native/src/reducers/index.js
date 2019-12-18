import {combineReducers} from 'redux';
import locale from './localeReducer';
import users from './usersReducer';
import errors from './errorReducer';
import loading from './loadingReducer';

export default combineReducers({
  locale,
  users,
  errors,
  loading,
});
