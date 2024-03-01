import React from 'react';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import store from './app/store/store';

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
