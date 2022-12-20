import { Routes } from '@angular/router';
import { TodoListComponent } from './components/views/todo/todo-list/todo-list.component';
import { AboutComponent } from './components/views/about/about.component';

export const routes: Routes = [
  { path: 'home', component: TodoListComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
