import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PzmWidgetComponent } from './widget.component';

xdescribe('PzmWidgetComponent', () => {
  let component: PzmWidgetComponent;
  let fixture: ComponentFixture<PzmWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PzmWidgetComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PzmWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
