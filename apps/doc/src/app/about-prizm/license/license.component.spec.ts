import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseComponent } from './license.component';

describe('LicenseComponent', () => {
  let component: LicenseComponent;
  let fixture: ComponentFixture<LicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicenseComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
