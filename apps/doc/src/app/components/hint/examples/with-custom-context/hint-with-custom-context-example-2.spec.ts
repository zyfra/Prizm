import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PrizmHintWithCustomContextExampleComponent } from './hint-with-custom-context-example.component';

describe('PrizmHintWithCustomContextExampleComponent 2', () => {
  let component: PrizmHintWithCustomContextExampleComponent;
  let fixture: ComponentFixture<PrizmHintWithCustomContextExampleComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PrizmHintWithCustomContextExampleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should display and hide hint correctly', fakeAsync(() => {
    // Наведение на кнопку и открытие hint
    component.directive.toggle(true);
    fixture.detectChanges();
    tick();

    let hintContainer = debugElement.query(By.css('[automation-id="hint-context-container"]'));
    expect(hintContainer).toBeTruthy();

    let nameElement = hintContainer.query(By.css('[automation-id="name"]'));
    expect(nameElement.nativeElement.textContent).toContain('Moscow');

    // Закрытие hint
    component.directive.toggle(false);
    fixture.detectChanges();
    tick();

    hintContainer = debugElement.query(By.css('[automation-id="hint-context-container"]'));
    expect(hintContainer).toBeFalsy();
  }));

  it('should change hint context correctly', fakeAsync(() => {
    // Изменение контекста
    debugElement.query(By.css('[automation-id="update-context"]')).nativeElement.click();
    fixture.detectChanges();
    tick();

    component.directive.toggle(true);
    fixture.detectChanges();
    tick();

    const hintContainer = debugElement.query(By.css('[automation-id="hint-context-container"]'));
    expect(hintContainer).toBeTruthy();

    const nameElement = hintContainer.query(By.css('[automation-id="name"]'));
    expect(nameElement.nativeElement.textContent).toContain('Saint Petersburg');
  }));
});
