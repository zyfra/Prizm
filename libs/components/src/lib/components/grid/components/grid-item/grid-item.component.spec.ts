import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmGridItemComponent } from './grid-item.component';

describe('GridItemComponent', () => {
  let component: PrizmGridItemComponent;
  let fixture: ComponentFixture<PrizmGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmGridItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
