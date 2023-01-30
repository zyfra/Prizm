import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmWidgetComponent } from './widget.component';

xdescribe('PrizmWidgetComponent', () => {
  let component: PrizmWidgetComponent;
  let fixture: ComponentFixture<PrizmWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmWidgetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
