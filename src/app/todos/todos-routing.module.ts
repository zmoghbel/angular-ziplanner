import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TodoDetailsComponent } from "./components/todo-details/todo-details.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

const routes: Routes = [
  { path: 'todos/:todoId', component: TodoDetailsComponent},
  { path: "list", component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule {}