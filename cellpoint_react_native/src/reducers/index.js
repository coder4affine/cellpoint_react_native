import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { App } from '../route';
import locale from './localeReducer';
import users from './usersReducer';
import errors from './errorReducer';
import loading from './loadingReducer';
import products from './productsReducer';

const navReducer = createNavigationReducer(App);

export default combineReducers({
  nav: navReducer,
  locale,
  users,
  errors,
  loading,
  products,
});
