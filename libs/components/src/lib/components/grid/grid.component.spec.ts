import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmGridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: PrizmGridComponent;
  let fixture: ComponentFixture<PrizmGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmGridComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
