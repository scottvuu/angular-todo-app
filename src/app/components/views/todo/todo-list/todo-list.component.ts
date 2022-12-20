import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.todos$;
  }

  onEditTodo(todo: Todo) {
    this.todoService.editTodo(todo);
  }

  onDeleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo.id);
  }

  onChangeStatus(todo: Todo) {
    const payload = {
      ...todo,
      isCompleted: !todo.completed,
    };
    this.todoService.editTodo(todo);
  }
}
