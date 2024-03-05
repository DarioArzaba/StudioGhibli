import React from 'react';
import {render} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from '../app/reducers/combineReducers';

export function renderWithProviders(component: React.ReactElement) {
  const store = configureStore({
    reducer,
  });
  return render(<Provider store={store}>{component}</Provider>);
}
