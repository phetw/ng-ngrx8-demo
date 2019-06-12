import { Action, createReducer, on } from '@ngrx/store';

import { listRequest, listSuccess } from './todo.actions';
import { TodoState } from './todo.state';

const initialState: TodoState = { isLoading: false, data: [] };

const reducer = createReducer(
  initialState,
  on(listRequest, state => {
    return {
      ...state,
      isLoading: true
    };
  }),
  on(listSuccess, (state, { payload }) => {
    return {
      ...state,
      isLoading: false,
      data: payload
    };
  })
);

export function todoReducer(state: TodoState, action: Action) {
  return reducer(state, action);
}
