import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  providers: [DatePipe]
})
export class AddTodoComponent implements OnInit {
  myDate = new Date();

  title: string;
  description: string = "";
  date: string = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  time: string;
  reminder: boolean;
  isDone: boolean = false;

  @Output() onAddTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  onSubmit(){
    if(!this.title){
      alert('Please enter todo title');
      return;
    }
    
    const newTodo = {
      title : this.title,
      description: this.description,
      date: this.date,
      time: this.time,
      alarmOn: this.reminder,
      isDone: this.isDone  
    };
    this.onAddTodo.emit(newTodo);

    this.title = "";
    this.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.time = "";
    this.reminder = false;
  }

}
