import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layouts/header/header.component';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/views/todo/todo-list/todo-list.component';
import { SpinnerComponent } from './components/atom/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AboutComponent } from './components/views/about/about.component';
import { TodoItemComponent } from './components/views/todo/todo-item/todo-item.component';
import { TodoInputComponent } from './components/views/todo/todo-input/todo-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoInputComponent,
    SpinnerComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
