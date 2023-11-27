import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizmAccordionItemComponent } from './accordion-item.component';
import { PrizmIconModule } from '../../../icon/icon.module';

describe('AccordionItemComponent', () => {
  let component: PrizmAccordionItemComponent;
  let fixture: ComponentFixture<PrizmAccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizmAccordionItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when accordion toggled', () => {
    let result = false;

    component.toggle$.subscribe(item => (result = true));
    component.toggle();
    fixture.detectChanges();

    expect(result).toBeTruthy();
  });

  it('should not emit when accordion toggled but disabled', () => {
    let result = false;

    component.disabled = true;
    component.toggle$.subscribe(item => (result = true));
    component.toggle();
    fixture.detectChanges();

    expect(result).toBeFalsy();
  });
});
