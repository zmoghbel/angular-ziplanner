import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';

@Component({
  selector: '[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    
  }

  isDone(){
    window.alert("you changes the done of your todo");
  }

}
