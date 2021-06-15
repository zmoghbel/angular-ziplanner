import { Action, createAction, props} from "@ngrx/store";
import { Todo } from '../models/todo';

// Load Todo List

export const LoadTodoListRequest = createAction(
    "[Todo List Component] Load Todo List Request"
);

export const LoadTodoListSuccess = createAction(
    "[Todo List Component] Load Todo List Success",
    props<{ todos: Todo[] }>()
);

export const LoadTodoListFailure = createAction(
    "[Todo List Component] Load Todo List Failure",
    props<{ error: any }>()
);

// Add Todo

export const AddTodo =  createAction(
    "[Todo List Component] Add Todo",
    props<{ todo: Todo }>()
);

export const AddTodoSuccess = createAction(
    "[Todo List Component] Add Todo Success",
    props<{ todo: Todo }>()
);

export const AddTodoFailure = createAction(
    "[Todo List Component] Add Todo Failure",
    props<{ error: string }>()
);

// Update Todo

export const UpdateTodo = createAction(
    "[Todo List Component] Update Todo",
    props<{ todo: Todo }>()
);

export const UpdateTodoSuccess = createAction(
    "[Todo List Component] Update Todo Success",
    props<{ todo: Todo }>()
);

export const UpdateTodoFailure = createAction(
    "[Todo List Component] Update Todo Failure",
    props<{ error: string }>()
);

// Delete Todo

export const DeleteTodo = createAction(
    "[Todo List Component] Delete Todo",
    props<{ todo: Todo }>()
);

export const DeleteTodoSuccess = createAction(
    "[Todo List Component] Delete Todo Success",
    props<{ todo: Todo }>()
);

export const DeleteTodoFailure = createAction(
    "[Todo List Component] Delete Todo Failure",
    props<{ error: string }>()
)