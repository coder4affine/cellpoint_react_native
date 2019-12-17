import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/route';
import store from './src/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
