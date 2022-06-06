import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonExampleBaseComponent } from './radio-button-example-base.component';

describe('RadioButtonExampleBaseComponent', () => {
  let component: RadioButtonExampleBaseComponent;
  let fixture: ComponentFixture<RadioButtonExampleBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonExampleBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonExampleBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
