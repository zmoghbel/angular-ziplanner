import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from '../models/todo';


//Load Todo List 

export const loadTodoList = createAction(
  '[Todo List Component] Load Todo List'
);

export const loadTodoListSuccess = createAction(
  '[Todo List Effect] Load Todo List Success', 
  props<{ todos: Todo[] }>()
);

export const loadTodoListFailure = createAction(
  '[Todo List Effect] Load Todo List Failure', 
  props<{ error: any }>()
);

// Add Todo

export const addTodo = createAction(
  '[Todo List Component] Add Todo',
  props<{ todo: Todo }>()
);

export const addTodoSuccess = createAction(
  '[Todo Add Effect] Add Todo Success',
  props<{ todo: Todo }>()
);

export const addTodoFailure = createAction(
  '[Todo Add Effect] Add Todo  Failure',
  props<{ error: any }>()
);

// Edit Todo

export const updateTodo = createAction(
  '[Todo List Component] Update Todo',
  props<{ todo: Update<Todo> }>()
);

export const deleteTodo = createAction(
  '[Todo/API] Delete Todo',
  props<{ id: string }>()
);

export const deleteTodos = createAction(
  '[Todo/API] Delete Todos',
  props<{ ids: string[] }>()
);

