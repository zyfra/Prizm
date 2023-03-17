import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTaskComponent } from './set-task.component';

describe('SetTaskComponent', () => {
  let component: SetTaskComponent;
  let fixture: ComponentFixture<SetTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetTaskComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
