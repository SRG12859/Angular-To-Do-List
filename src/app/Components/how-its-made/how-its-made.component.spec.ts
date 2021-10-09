import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItsMadeComponent } from './how-its-made.component';

describe('HowItsMadeComponent', () => {
  let component: HowItsMadeComponent;
  let fixture: ComponentFixture<HowItsMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowItsMadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowItsMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
