import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Todo> = new EventEmitter();
  @Output() onDoneTodo : EventEmitter<Todo> = new EventEmitter();
  faTimes = faTimes;
  faBell = faBell;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    
  }

  isDone(todo : Todo){
    //window.alert("you changes the done of your todo");
    this.onDoneTodo.emit(todo);
  }

  onDelete(todo : Todo){
    this.onDeleteTodo.emit(todo);
  }

  onToggle(todo : Todo){
    this.onToggleReminder.emit(todo);
  }

}
