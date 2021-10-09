import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySingleTodoComponent } from './display-single-todo.component';

describe('DisplaySingleTodoComponent', () => {
  let component: DisplaySingleTodoComponent;
  let fixture: ComponentFixture<DisplaySingleTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySingleTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySingleTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
