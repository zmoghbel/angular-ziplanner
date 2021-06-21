import { Component, Injectable, Input, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todos;
  todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { 
    this.todos = this.todoService.getTodos();
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const todoIdfromRoute = Number(routeParams.get('todoId'));

    this.todo = this.todos.find(todo => todo.id === todoIdfromRoute);
  }

}
