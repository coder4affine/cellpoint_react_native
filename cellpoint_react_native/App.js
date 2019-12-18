import React from 'react';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import {Provider, connect} from 'react-redux';
import ThemeContext from './src/context/themeContext';
import Navigation from './src/route';
import store from './src/configureStore';

const NavApp = createReduxContainer(Navigation);
const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(NavApp);

const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
