import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { TodoState } from '../../store/todo.reducer';
import { select, Store } from '@ngrx/store';
import * as fromTodoAction from '../../store/todo.actions';
import { selectTodoList } from '../../store/todo.selectors';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$ : Observable<Todo[]>;

  constructor(private todoService: TodoService, private store: Store<TodoState>) { }

  ngOnInit() {
    //this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
    this.store.dispatch(fromTodoAction.loadTodoList());
    this.loadTodoList();
  }

  loadTodoList(){
    this.todos$ = this.store.pipe(select(selectTodoList));
  }

  edit(){
    window.alert('ToDo: we want to go to edit todo page');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  deleteTodo(todo : Todo){
    //this.todoService.deleteTodo(todo).subscribe(() => (this.todos = this.todos.filter((t) => t.id !== todo.id)));
    this.store.dispatch(fromTodoAction.deleteTodo({ id: todo.id}))
  }

  toggleReminder(todo : Todo){  
    const todoUpdate: Update<Todo> = {
      id: todo.id,
      changes: { ...todo, alarmOn: !todo.alarmOn }
    };
    //todo.alarmOn = !todo.alarmOn;
    //this.todoService.updateTodo(todo).subscribe();

    this.store.dispatch(fromTodoAction.updateTodo({ todo : todoUpdate }));
  }

  doneTodo(todo : Todo){
    const todoUpdate: Update<Todo> = {
      id: todo.id,
      changes: { ...todo, isDone: !todo.isDone }
    };
    //this.todoService.updateTodo(todo).subscribe();

    this.store.dispatch(fromTodoAction.updateTodo({ todo : todoUpdate }));
  }

  addTodo(todo : Todo){
    //this.todoService.addTodo(todo).subscribe((todo) => (this.todos.push(todo)));
    this.store.dispatch(fromTodoAction.addTodo({ todo: todo }));
  }

}
