import { createAction, props } from '@ngrx/store';
import { Todo } from '../../model/todo.model';

export const listRequest = createAction('[Todo] List todo request');
export const listSuccess = createAction('[Todo] List todo success', props<{ payload: Todo[] }>());
