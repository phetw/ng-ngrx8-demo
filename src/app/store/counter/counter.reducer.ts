import { Action, createReducer, on } from '@ngrx/store';

import { CounterState } from './counter.state';
import { add, subtract } from './counter.actions';

const initialState: CounterState = { count: 0 };

const reducer = createReducer(
  initialState,
  on(add, state => ({
    ...state,
    count: state.count + 1
  })),
  on(subtract, state => ({
    ...state,
    count: state.count - 1
  }))
);

export function counterReducer(state: CounterState, action: Action) {
  return reducer(state, action);
}
