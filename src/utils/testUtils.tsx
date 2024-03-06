import React, {PropsWithChildren} from 'react';
import {RenderOptions, render} from '@testing-library/react-native';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer, {AppState} from '../app/reducers/combineReducers';
import store from '../app/store/store';

export function renderWithProvidersSimple(component: React.ReactElement) {
  const emptyStore = configureStore({
    reducer,
  });
  return render(<Provider store={emptyStore}>{component}</Provider>);
}

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<AppState>;
  mystore?: typeof store;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {preloadedState, mystore, ...renderOptions}: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
