import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromTodoAction from './todo.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
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


  constructor(
    private actions$: Actions,
    private todoService: TodoService
    ) {}

}