import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { todoformat } from 'src/todoformat';

@Component({
  selector: 'app-display-single-todo',
  templateUrl: './display-single-todo.component.html',
  styleUrls: ['./display-single-todo.component.css'],
})
export class DisplaySingleTodoComponent implements OnInit {
  @Input() todo!: todoformat;
  @Input() i!: number;
  @Output() deletetodo: EventEmitter<todoformat> = new EventEmitter();
  @Output() checktodo: EventEmitter<todoformat> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

  DelTodo(Todo:todoformat) {
    this.deletetodo.emit(Todo);
  }

  check(Todo:todoformat) {
    this.checktodo.emit(Todo);
  }
}
