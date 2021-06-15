import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { TodoService } from "../services/todo.service";
import { Observable, of as observableOf, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, startWith, switchMap } from 'rxjs/operators';
import * as todoActions from "./todo.actions";
import { Action } from "rxjs/internal/scheduler/Action";

@Injectable()
export class TodoEffects{
    constructor(
        private actions$: Actions,
        private todoService: TodoService
    ){}

  loadTodoList$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(todoActions.LoadTodoListRequest),
        mergeMap(() =>
            this.todoService.getTodos().pipe(
                map(todos => todoActions.LoadTodoListSuccess({ todos })),
                catchError(error => of(todoActions.LoadTodoListFailure({ error }))))
        ),
      );
  });

  addTodo$ = createEffect(() => {
      return this.actions$.pipe(
              ofType(todoActions.AddTodo),
              mergeMap((action) =>
                  this.todoService.addTodo(action.todo).pipe(
                      map(todo => todoActions.AddTodoSuccess({ todo })),
                      catchError(error => of(todoActions.AddTodoFailure({ error }))))
                  ),
      );
  });

  updateTodo$ = createEffect(() => {
      return this.actions$.pipe(
              ofType(todoActions.UpdateTodo),
              mergeMap((action) =>
                  this.todoService.updateTodo(action.todo).pipe(
                      map(todo => todoActions.UpdateTodoSuccess({ todo })),
                      catchError(error => of(todoActions.UpdateTodoFailure({ error }))))
                  ),
      );
  });

  deleteTodo$ = createEffect(() => {
      return this.actions$.pipe(
              ofType(todoActions.DeleteTodo),
              mergeMap((action) =>
                  this.todoService.deleteTodo(action.todo).pipe(
                      map(todo => todoActions.DeleteTodoSuccess({ todo })),
                      catchError(error => of(todoActions.DeleteTodoFailure({ error }))))
                  ),
      );
  });


}
