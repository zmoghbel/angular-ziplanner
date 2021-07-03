import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  {
    path: "todos",
    loadChildren: "../app/todos/todos.module#TodosModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
