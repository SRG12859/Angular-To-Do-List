import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { todoformat } from 'src/todoformat';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css'],
})
export class AddToDoComponent implements OnInit {
  @Output() Addtodo: EventEmitter<todoformat> = new EventEmitter();
  Todo = this.fb.group({
    todotitle: ['', [Validators.required, Validators.minLength(3)]],
    todobody: ['', [Validators.required, Validators.minLength(3)]],
  });

  ngOnInit(): void {}

  addTodo() {
    const todo={
      todotitle: this.Todo.get('todotitle')?.value,
      todobody: this.Todo.get('todobody')?.value,
      isStrike: false
    }
    this.Addtodo.emit(todo)
  }
  delalltodo=()=>{
    localStorage.clear()
  }
  constructor(private fb: FormBuilder) {}
}
