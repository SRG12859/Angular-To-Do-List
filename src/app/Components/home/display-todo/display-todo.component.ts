import { Component, OnInit } from '@angular/core';
import { todoformat } from '../../../../todoformat';

@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css'],
})
export class DisplayTodoComponent implements OnInit {
  localItem: any;
  todos: todoformat[];
  todoformat: any;
  constructor() {
    this.localItem = window.localStorage.getItem('todos');
    if (this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  tododelete(todo: todoformat) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  todoadd(todo: todoformat) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  checktodo(todo: todoformat) {
    todo.isStrike = !todo.isStrike;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
