import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailsComponent } from './todos/components/todo-details/todo-details.component';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'todos/:todoId', component: TodoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
