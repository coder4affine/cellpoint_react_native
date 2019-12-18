import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';
import {App} from '../route';
import locale from './localeReducer';
import users from './usersReducer';
import errors from './errorReducer';
import loading from './loadingReducer';

const navReducer = createNavigationReducer(App);

export default combineReducers({
  nav: navReducer,
  locale,
  users,
  errors,
  loading,
});
