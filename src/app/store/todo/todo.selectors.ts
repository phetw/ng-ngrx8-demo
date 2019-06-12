import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TodoState } from './todo.state';

const countSelector = createFeatureSelector<TodoState>('todo');

export const todo = createSelector(
  countSelector,
  state => state.data
);

export const todoLoading = createSelector(
  countSelector,
  state => state.isLoading
);
