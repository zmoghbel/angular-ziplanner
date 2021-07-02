import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './todos/components/todo/todo.component';
import { TodoService } from './todos/services/todo.service';
import { TodoListComponent } from './todos/components/todo-list/todo-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TodoDetailsComponent } from './todos/components/todo-details/todo-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTodoComponent } from './todos/components/add-todo/add-todo.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    TodoListComponent,
    NavbarComponent,
    TodoDetailsComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
