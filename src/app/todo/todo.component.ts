import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;
  @Output() onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  faTimes = faTimes;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    
  }

  isDone(){
    window.alert("you changes the done of your todo");
  }

  onDelete(todo : Todo){
    this.onDeleteTodo.emit(todo);
  }

}
