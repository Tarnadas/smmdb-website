import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore, Reducer } from 'redux';
import produce from 'immer';

import { DefaultTheme } from '../constants/themes';

import { State, Actions, ActionType } from './types';

export const StateProvider: React.FunctionComponent = ({ children }) => {
  const initialState: State = {
    theme: new DefaultTheme(),
    identity: undefined,
  };

  const reducer: Reducer<State, Actions> = (
    state?: State,
    action?: Actions,
  ): State => {
    if (!action || !state) return initialState;
    return produce(state, draftState => {
      switch (action.type) {
        case ActionType.CHANGE_THEME:
          draftState.theme = action.theme;
          break;
        default:
      }
    });
  };

  return (
    <Provider store={createStore(reducer, initialState)}>{children}</Provider>
  );
};

export function useReduxState<S>(
  selector: (state: State) => S,
  equalityFn?: ((left: S, right: S) => boolean) | undefined,
) {
  return useSelector<State, S>(selector, equalityFn);
}
