import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmColumnSettingsComponent } from './column-settings.component';
import { CommonModule } from '@angular/common';

describe('PrizmCardComponent', () => {
  let component: PrizmColumnSettingsComponent;
  let fixture: ComponentFixture<PrizmColumnSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [PrizmColumnSettingsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmColumnSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
