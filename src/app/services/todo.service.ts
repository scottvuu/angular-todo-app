import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService extends CrudService<Todo> {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$: Observable<Todo[]> = this.todosSubject.asObservable();

  constructor(httpClient: HttpClient) {
    super(httpClient, 'todos');
  }

  getTodos() {
    return this.httpClient
      .get<Todo[]>(this.baseUrl, {
        params: { _limit: 20 },
      })
      .subscribe((res) => {
        this.todos = res;
        this.updateTodosData();
      });
  }

  addTodo(title: string) {
    const newTodo = new Todo(1, uuid(), title);
    this.add(newTodo).subscribe({
      next: (res) => {
        this.todos.unshift(newTodo);
        this.updateTodosData();
      },
      error: (err) => alert('Something wrong, please try again'),
    });
  }

  editTodo(todo: Todo) {
    this.edit(todo.id, {
      title: todo.title,
      completed: todo.completed,
    }).subscribe({
      next: (res) => {
        const index = this.todos.findIndex((t) => t.id === todo.id);
        const data = this.todos[index];
        data.title = todo.title;
        data.completed = todo.completed;
        this.todos.splice(index, 1, data);
        this.updateTodosData();
      },
      error: (err) => alert('Something wrong, please try again'),
    });
  }

  deleteTodo(id: number | string) {
    this.delete(id).subscribe((value) => {
      const index = this.todos.findIndex((t) => t.id === id);
      this.todos.splice(index, 1);
      this.updateTodosData();
    });
  }

  private updateTodosData() {
    this.todosSubject.next(this.todos);
  }
}
