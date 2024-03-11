import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {RenderOptions, render} from '@testing-library/react-native';
import store from '../app/store/store';
import reducer, {AppState} from '../app/reducers/combineReducers';

export function renderWithEmptyReduxStore(component: React.ReactElement) {
  const emptyStore = configureStore({
    reducer,
  });
  return render(<Provider store={emptyStore}>{component}</Provider>);
}

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<AppState>;
  mystore?: typeof store;
}
export function renderWithReduxStore(
  ui: React.ReactElement,
  {preloadedState, mystore, ...renderOptions}: ExtendedRenderOptions = {},
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
