import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {
  FROM_TEXT,
  LINES_SHOWN,
  PaginatorI18nExampleComponent,
} from './query-builder-i18n-example.component';
import { PrizmInputTextModule } from '@prizm-ui/components';
import { By } from '@angular/platform-browser';

describe('PaginatorI18nExampleComponent', () => {
  let component: PaginatorI18nExampleComponent;
  let fixture: ComponentFixture<PaginatorI18nExampleComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorI18nExampleComponent, PrizmInputTextModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatorI18nExampleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should update passed text for lines shown', () => {
    // click to change context
    const element = debugElement.query(By.css('[data-testid="paginator-i18n-lines-shown"]'));
    expect(element.nativeElement.innerHTML.trim()).toEqual(LINES_SHOWN);
  });

  it('should update passed text for from text', () => {
    const element = debugElement.query(By.css('[data-testid="paginator-i18n-from-text"]'));
    expect(element.nativeElement.innerHTML.trim()).toEqual(FROM_TEXT);
  });
});
