import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PrizmHintWithCustomContextExampleComponent } from './hint-with-custom-context-example.component';

describe('PrizmHintWithCustomContextExampleComponent', () => {
  let component: PrizmHintWithCustomContextExampleComponent;
  let fixture: ComponentFixture<PrizmHintWithCustomContextExampleComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(PrizmHintWithCustomContextExampleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should simulate mouseover on the button and check for the hint', async () => {
    // Наведение на кнопку
    fixture.componentInstance.directive.toggle(true);
    fixture.detectChanges();

    // Проверка появления контейнера с hint-context-container
    const openedHintContainer = document.querySelector('[automation-id="hint-context-container"]');
    expect(openedHintContainer).toBeTruthy();

    // Проверка контента внутри hintContainer
    const firstOpenContainerWithName = openedHintContainer?.querySelector('[automation-id="name"]');
    expect(firstOpenContainerWithName?.textContent).toContain('Moscow');

    // close
    fixture.componentInstance.directive.toggle(false);
    fixture.detectChanges();

    const closedHintContainer = document.querySelector('[automation-id="hint-context-container"]');
    expect(closedHintContainer).toBeFalsy();

    // click to change context
    debugElement.query(By.css('[automation-id="update-context"]')).nativeElement.click();
    fixture.detectChanges();

    // open
    fixture.componentInstance.directive.toggle(true);
    fixture.detectChanges();

    const changeContextHintContainer = document.querySelector('[automation-id="hint-context-container"]');
    expect(changeContextHintContainer).toBeTruthy();

    // Проверка контента внутри hintContainer
    const changedContextWithNameContainer =
      changeContextHintContainer?.querySelector('[automation-id="name"]');
    expect(changedContextWithNameContainer?.textContent).toContain('Saint Petersburg');
  });
});
