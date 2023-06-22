import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-accordion-example',
  templateUrl: './accordion-example.component.html',
  styleUrls: ['./accordion-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionExampleComponent {
  public disabled = false;
  public onlyOneExpanded = false;
  public title = 'Title number 2';
  public isExpanded = false;

  public readonly exampleBasicAccordion: TuiDocExample = {
    TypeScript: import('./examples/accordion-basic-example/accordion-basic-example.component?raw'),
    HTML: import('./examples/accordion-basic-example/accordion-basic-example.component.html?raw'),
    LESS: import('./examples/accordion-basic-example/accordion-basic-example.component.less?raw'),
  };

  public readonly exampleWithInstrumentsAccordion: TuiDocExample = {
    TypeScript: import(
      './examples/accordion-with-instruments-example/accordion-with-instruments-example.component?raw'
    ),
    HTML: import(
      './examples/accordion-with-instruments-example/accordion-with-instruments-example.component.html?raw'
    ),
    LESS: import(
      './examples/accordion-with-instruments-example/accordion-with-instruments-example.component.less?raw'
    ),
  };

  public readonly exampleOneExpandedAccordion: TuiDocExample = {
    TypeScript: import(
      './examples/accordion-single-expand-example/accordion-single-expand-example.component?raw'
    ),
    HTML: import(
      './examples/accordion-single-expand-example/accordion-single-expand-example.component.html?raw'
    ),
    LESS: import(
      './examples/accordion-single-expand-example/accordion-single-expand-example.component.less?raw'
    ),
  };

  public readonly exampleMultipleExpandedAccordion: TuiDocExample = {
    TypeScript: import(
      './examples/accordion-multiple-expand-example/accordion-multiple-expand-example.component?raw'
    ),
    HTML: import(
      './examples/accordion-multiple-expand-example/accordion-multiple-expand-example.component.html?raw'
    ),
    LESS: import(
      './examples/accordion-multiple-expand-example/accordion-multiple-expand-example.component.less?raw'
    ),
  };

  public readonly accordionNested: TuiDocExample = {
    TypeScript: import('./examples/nested/nested.component?raw'),
    HTML: import('./examples/nested/nested.component.html?raw'),
  };

  public readonly customTitle: TuiDocExample = {
    TypeScript: import('./examples/custom-title/custom-title.component?raw'),
    HTML: import('./examples/custom-title/custom-title.component.html?raw'),
    LESS: import('./examples/custom-title/custom-title.component.less?raw'),
    MODULE: import('./examples/custom-title/custom-title.module?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
