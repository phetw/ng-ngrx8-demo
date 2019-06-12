import { Todo } from 'src/app/model/todo.model';

export interface TodoState {
  isLoading: boolean;
  data: Todo[];
}
