import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../types';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  todos: Todo[] = [];
  userId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id')) || 0;
    this.todoService
      .getTodos('https://jsonplaceholder.typicode.com/todos', {})
      .subscribe((todos) => {
        this.todos = todos.filter((todo) => todo.userId === this.userId);
        console.log(todos);
      });
  }
}
