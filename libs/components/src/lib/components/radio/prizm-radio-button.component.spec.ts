import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrizmRadioButtonComponent } from './prizm-radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PrizmRadioButtonComponent', () => {
  let component: PrizmRadioButtonComponent;
  let fixture: ComponentFixture<PrizmRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrizmRadioButtonComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizmRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('default disabled value should be falsy', () => {
    expect(component.accessorIsDisabled).toBeFalsy();
  });

  it('should emit when radio button value changed', () => {
    let result = false;

    component.changeEvent.subscribe(() => (result = true));
    component.onChangeEventHandler(null as any);

    expect(result).toBeTruthy();
  });

  it('should emit when radio button focused', () => {
    let result = false;

    component.focusEvent.subscribe(() => (result = true));
    component.onFocusEventHandler(null as any);

    expect(result).toBeTruthy();
  });

  it('should emit when radio button focused out', () => {
    let result = false;

    component.focusOutEvent.subscribe(() => (result = true));
    component.onFocusOutEventHandler(null as any);

    expect(result).toBeTruthy();
  });

  it('should emit when radio button clicked', () => {
    let result = false;

    component.clickEvent.subscribe(() => (result = true));
    component.onClickEventHandler(null as any);

    expect(result).toBeTruthy();
  });

  it('should not emit click event when disabled', () => {
    let result = false;

    component.accessorIsDisabled = true;
    component.clickEvent.subscribe(() => (result = true));
    component.onClickEventHandler(null as any);

    expect(result).toBeFalsy();
  });

  it('should emit when radio button blurred', () => {
    let result = false;

    component.blurEvent.subscribe(() => (result = true));
    component.onBlurEventHandler(null as any);

    expect(result).toBeTruthy();
  });

  it('should not emit blur event when disabled', () => {
    let result = false;

    component.accessorIsDisabled = true;
    component.blurEvent.subscribe(() => (result = true));
    component.onBlurEventHandler(null as any);

    expect(result).toBeFalsy();
  });
});
