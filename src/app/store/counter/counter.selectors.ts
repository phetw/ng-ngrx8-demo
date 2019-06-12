import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterState } from './counter.state';

const countSelector = createFeatureSelector<CounterState>('counter');

export const count = createSelector(
  countSelector,
  state => state.count
);
