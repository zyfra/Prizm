import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { InputNumberDisabledExampleComponent } from './input-number-disabled-example.component';
import { firstValueFrom, timer } from 'rxjs';

describe('DocInputNumberDisabledExampleComponent', () => {
  let component: InputNumberDisabledExampleComponent;
  let fixture: ComponentFixture<InputNumberDisabledExampleComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNumberDisabledExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputNumberDisabledExampleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should check border and clear button activate and deactivate button', async () => {
    expect(component.requiredInputControl.disabled).toBeFalsy();

    // check layout
    const inputLayout = debugElement.query(By.css('[automation-id="layout-button"]'));
    expect(inputLayout.nativeElement).toBeTruthy();

    // deactivate
    const element = debugElement.query(By.css('[automation-id="update-state-button"]'));
    expect(element.nativeElement).toBeTruthy();
    element.nativeElement.click();
    fixture.detectChanges();

    // checked
    expect(component.requiredInputControl.disabled).toBeTruthy();

    // waiting while updating
    await firstValueFrom(timer(100));

    // get inner element
    const layoutContainer = inputLayout.query(By.css('.prizm-input-form'));

    // we found container
    expect(layoutContainer.nativeElement).toBeTruthy();

    // check disabled state
    expect(
      (layoutContainer.nativeElement as HTMLDivElement).classList.contains('prizm-input-form-disabled')
    ).toBeTruthy();
  });
});
