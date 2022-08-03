import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuiWidgetComponent } from './widget.component';

describe('ZuiWidgetComponent', () => {
  let component: ZuiWidgetComponent;
  let fixture: ComponentFixture<ZuiWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZuiWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZuiWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
