import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoService } from './services/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    TodoListComponent,
    NavbarComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
