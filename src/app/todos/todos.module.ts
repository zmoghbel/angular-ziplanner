import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { TodoService } from "./services/todo.service";
import { TodoComponent } from "./components/todo/todo.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './store/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo.effects';
import { TodoDetailsComponent } from "./components/todo-details/todo-details.component";
import { TodosRoutingModule } from "./todos-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    TodoComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    FontAwesomeModule,
    StoreModule.forFeature(fromTodo.todoesFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  providers: [TodoService],
  exports: [
    TodoComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoDetailsComponent
  ]
})
export class TodosModule {}