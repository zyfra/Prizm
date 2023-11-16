import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmHeaderComponent } from './prizm-header.component';

describe('PrizmHeaderComponent', () => {
  let component: PrizmHeaderComponent;
  let fixture: ComponentFixture<PrizmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
