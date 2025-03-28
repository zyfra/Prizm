import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmNoneContentComponent } from './none-content.component';
import { CommonModule } from '@angular/common';

describe('PrizmNoneContentComponent', () => {
  let component: PrizmNoneContentComponent;
  let fixture: ComponentFixture<PrizmNoneContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, PrizmNoneContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmNoneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
