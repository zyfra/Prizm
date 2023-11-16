import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmIndicatorComponent } from './indicator.component';
import { CommonModule } from '@angular/common';

describe('IndicatorComponent', () => {
  let component: PrizmIndicatorComponent;
  let fixture: ComponentFixture<PrizmIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmIndicatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
