import { initialState } from './state';
import { createReducer, on } from '@ngrx/store';
import * as todoActions from './todo.actions';

export const todoReducer = createReducer(
    initialState,
    on(todoActions.LoadTodoListRequest, state =>({
        ...state,
        isLoading: true
    })),

    on(todoActions.LoadTodoListSuccess, (state, {todos}) => ({
        ...state,
        isLoading: false,
        todos: todos
    })),

    on(todoActions.LoadTodoListFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(todoActions.AddTodo, state => ({
        ...state,
        isLoading: true
    })),

    on(todoActions.AddTodoSuccess, (state, {todo}) => ({
        ...state,
        isLoading: false,
        selectedTodo: todo,
        error: null
    })),

    on(todoActions.AddTodoFailure, (state, {error}) =>({
        ...state,
        isLoading: false,
        error: error
    })),

    on(todoActions.UpdateTodo, state => ({
        ...state,
        isLoading: true
    })),

    on(todoActions.UpdateTodoSuccess, (state, {todo}) => ({
        ...state,
        isLoading: false,
        selectedTodo: todo,
        error: null
    })),

    on(todoActions.UpdateTodoFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    })),

    on(todoActions.DeleteTodo, state => ({
        ...state,
        isLoading: true
    })),

    on(todoActions.DeleteTodoSuccess,(state, {todo}) => ({
        ...state,
        isLoading: false,
        todos: state.todos.filter(x => x.id != todo.id)
    })),

    on(todoActions.DeleteTodoFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error: error
    }))
);