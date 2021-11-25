import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyfraIconComponent } from './zyfra-icon.component';

describe('IconComponent', () => {
  let component: ZyfraIconComponent;
  let fixture: ComponentFixture<ZyfraIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZyfraIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZyfraIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
