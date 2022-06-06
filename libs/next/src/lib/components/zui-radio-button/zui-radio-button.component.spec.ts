import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuiRadioButtonComponent } from './zui-radio-button.component';

describe('ZuiRadioButtonComponent', () => {
  let component: ZuiRadioButtonComponent;
  let fixture: ComponentFixture<ZuiRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZuiRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuiRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
