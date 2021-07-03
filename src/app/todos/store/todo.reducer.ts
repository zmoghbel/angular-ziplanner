import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from '../models/todo';
import * as TodoActions from './todo.actions';

export const todoesFeatureKey = 'todos';

export interface TodoState extends EntityState<Todo> {
  // additional entities state properties
  error: any
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: TodoState = adapter.getInitialState({
  // additional entity state properties
  error: null
});


export const reducer = createReducer(
  initialState,
  on(TodoActions.addTodoSuccess,
    (state, action) => adapter.addOne(action.todo, state)
  ),
  on(TodoActions.addTodoFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  on(TodoActions.upsertTodo,
    (state, action) => adapter.upsertOne(action.todo, state)
  ),
  on(TodoActions.upsertTodos,
    (state, action) => adapter.upsertMany(action.todos, state)
  ),
  on(TodoActions.updateTodo,
    (state, action) => adapter.updateOne(action.todo, state)
  ),
  on(TodoActions.updateTodos,
    (state, action) => adapter.updateMany(action.todos, state)
  ),
  on(TodoActions.deleteTodo,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TodoActions.deleteTodos,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TodoActions.loadTodos,
    (state, action) => adapter.setAll(action.todos, state)
  ),
  on(TodoActions.clearTodos,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
