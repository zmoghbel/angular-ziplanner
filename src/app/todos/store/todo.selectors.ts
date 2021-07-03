import { createFeatureSelector, createSelector } from "@ngrx/store";
import { selectAll, todoesFeatureKey, TodoState } from "./todo.reducer";

export const selectTodoState = createFeatureSelector<TodoState>(todoesFeatureKey);

export const selectTodoList = createSelector(selectTodoState, selectAll);

