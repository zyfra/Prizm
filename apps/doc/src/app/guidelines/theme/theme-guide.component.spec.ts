import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemegGuideComponent } from './theme-guide.component';

describe('ThemegGuideComponent', () => {
  let component: ThemegGuideComponent;
  let fixture: ComponentFixture<ThemegGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemegGuideComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemegGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
