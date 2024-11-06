import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmTimePickerComponent } from './time-picker.component';

describe('TimePickerComponent', () => {
  let component: PrizmTimePickerComponent;
  let fixture: ComponentFixture<PrizmTimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmTimePickerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
