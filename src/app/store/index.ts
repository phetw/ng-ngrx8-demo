import { ActionReducerMap } from '@ngrx/store';

import { CounterState, counterReducer } from './counter';
import { TodoState, todoReducer } from './todo';

export interface State {
  counter: CounterState;
  todo: TodoState;
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  todo: todoReducer
};
