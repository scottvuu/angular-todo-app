import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService
  ) {}

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      content: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(250),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.todoService.addTodo(this.form.value.content);
    this.form.reset({});
  }
}
