import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './app/store/store';

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
