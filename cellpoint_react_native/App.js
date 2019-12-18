import React from 'react';

import { Provider, connect } from 'react-redux';
import Navigation from './src/route';
import store from './src/configureStore';

const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(Navigation);

const App = () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
