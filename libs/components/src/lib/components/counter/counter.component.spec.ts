import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PrizmCounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: PrizmCounterComponent;
  let fixture: ComponentFixture<PrizmCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmCounterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmCounterComponent);
    component = fixture.componentInstance;
  });

  it('should set value to counter', () => {
    component.value = 10;
    expect(component._value).toBe(10);
  });
});
