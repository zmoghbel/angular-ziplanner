import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = new Array<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }

  edit(){
    window.alert('ToDo: we want to go to edit todo page');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  deleteTodo(todo : Todo){
    this.todoService.deleteTodo(todo).subscribe(() => (this.todos = this.todos.filter((t) => t.id !== todo.id)));
  }

}
