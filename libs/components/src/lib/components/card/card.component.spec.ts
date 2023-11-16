import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmCardComponent } from './card.component';
import { CommonModule } from '@angular/common';

describe('PrizmCardComponent', () => {
  let component: PrizmCardComponent;
  let fixture: ComponentFixture<PrizmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PrizmCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
