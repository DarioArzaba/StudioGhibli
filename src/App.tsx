import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {Provider} from 'react-redux';
import store from './app/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
