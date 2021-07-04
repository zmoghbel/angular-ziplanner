import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromTodoAction from './todo.actions';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import { of } from 'rxjs';



@Injectable()
export class TodoEffects {

  createTodo$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromTodoAction.addTodo),
        mergeMap(action =>
          this.todoService.addTodo(action.todo).pipe(
            map(todo => fromTodoAction.addTodoSuccess({ todo })),
            catchError(error => of(fromTodoAction.addTodoFailure({ error }))))
          ),
    );
  });

  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromTodoAction.loadTodoList),
        mergeMap(action =>
          this.todoService.getTodos().pipe(
            map(todos => fromTodoAction.loadTodoListSuccess({ todos })),
            catchError(error => of(fromTodoAction.loadTodoListFailure({ error }))))
          ),
    );
  });

  updateTodo$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromTodoAction.updateTodo),
        concatMap(action =>
          this.todoService.updateTodo(
            action.todo.id,
            action.todo.changes
            )
          ),
    );
  },
  {dispatch : false}
  );


  constructor(
    private actions$: Actions,
    private todoService: TodoService
    ) {}

}
