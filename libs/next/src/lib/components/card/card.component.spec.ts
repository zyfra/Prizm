import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PzmCardComponent } from './card.component';
import { CommonModule } from '@angular/common';

describe('PzmCardComponent', () => {
  let component: PzmCardComponent;
  let fixture: ComponentFixture<PzmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CommonModule ],
      declarations: [ PzmCardComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PzmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
