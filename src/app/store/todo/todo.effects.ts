import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { EMPTY } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { TodoService } from 'src/app/service/todo.service';
import { listRequest, listSuccess } from './todo.actions';
import { Todo } from 'src/app/model/todo.model';

@Injectable()
export class TodoEffects {
  constructor(private actions: Actions, private todoService: TodoService) {}

  listTodo$ = createEffect(() =>
    this.actions.pipe(
      ofType(listRequest),
      switchMap(() => {
        return this.todoService.list().pipe(
          map((todos: Todo[]) => {
            return listSuccess({
              payload: todos
            });
          }),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
