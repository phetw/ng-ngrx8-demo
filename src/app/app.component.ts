import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { State } from './store';
import { count, add, subtract } from './store/counter';
import { todo, todoLoading, listRequest } from './store/todo';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-root',
  template: `
    <section>
      <h1>{{ count$ | async }}</h1>
      <button (click)="add()">add</button>
      <button (click)="subtract()">substract</button>
    </section>
    <section>
      <button (click)="listTodo()">get todos</button>
      <div *ngIf="todosLoading$ | async">Loading....</div>

      <div *ngFor="let todo of todos$ | async">
        <div *ngIf="!(todosLoading$ | async)">{{ todo.title }}</div>
      </div>
    </section>
  `
})
export class AppComponent implements OnInit {
  count$: Observable<number>;
  todos$: Observable<Todo[]>;
  todosLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.count$ = this.store.pipe(select(count));

    this.todos$ = this.store.pipe(select(todo));
    this.todosLoading$ = this.store.pipe(select(todoLoading));
  }

  listTodo() {
    this.store.dispatch(listRequest());
  }

  add() {
    this.store.dispatch(add());
  }

  subtract() {
    this.store.dispatch(subtract());
  }
}
