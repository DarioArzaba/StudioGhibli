import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store/store';
import NavigationGuard from './hoc/NavigationGuard';

const App = (): React.JSX.Element => {
  return (
    <Provider store={store}>
      <NavigationGuard />
    </Provider>
  );
};

export default App;
