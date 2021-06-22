import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TodoService } from "./services/todo.service";
import { TodoComponent } from "./components/todo/todo.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@NgModule({
  declarations: [
    TodoComponent,
    AddTodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [TodoService],
  exports: [
    TodoComponent,
    AddTodoComponent,
    TodoListComponent
  ]
})
export class TodosModule {}