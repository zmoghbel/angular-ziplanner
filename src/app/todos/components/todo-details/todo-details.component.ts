import { Component, Injectable, Input, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';
import { TodoState } from '../../store/todo.reducer';
import * as fromTodoAction from '../../store/todo.actions';
import { selectedTodo, selectTodoList } from '../../store/todo.selectors';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  //todos;
  //todos$ : Observable<Todo[]>;
  //todo$ : Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
    private store: Store<TodoState>
  ) { 
    //this.todos = this.todoService.getTodos();
    //this.todoService.getTodos().subscribe((todos) => (this.todos = todos as Todo[]));
    //alert(this.todos.join("\n"));    
  }

  model: any = {};

  ngOnInit() {
    this.store.dispatch(fromTodoAction.loadTodo({id : parseInt(this.route.snapshot.paramMap.get('todoId')) }));

    this.store.pipe(select(selectedTodo)).subscribe(todo => 
      this.model = Object.assign(new Todo(), todo));

    //this.store.dispatch(fromTodoAction.loadTodoList());
    //this.loadTodoList();
    
    //const routeParams = this.route.snapshot.paramMap;
    //const todoIdfromRoute = Number(routeParams.get('todoId'));
    //alert("I am here"+ todoIdfromRoute);
    //alert("hi");
    
    //console.log(this.todos.join('\n'));
    //this.todo = this.todos.find(todo => todo.id === todoIdfromRoute);
  }

  onEditClick(){

    const update:Update<Todo> ={
      id: this.model.id,
      changes: this.model
    }

    this.store.dispatch(fromTodoAction.updateTodo({todo: update}))
  }

}
