import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmAccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: PrizmAccordionComponent;
  let fixture: ComponentFixture<PrizmAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmAccordionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
