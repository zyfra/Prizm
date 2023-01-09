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

  public readonly exampleBasicAccordion: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/accordion-basic-example/accordion-basic-example.component'),
    HTML: import('!!raw-loader!./examples/accordion-basic-example/accordion-basic-example.component.html'),
    LESS: import('./examples/accordion-basic-example/accordion-basic-example.component.less?raw'),
  };

  public readonly exampleWithInstrumentsAccordion: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/accordion-with-instruments-example/accordion-with-instruments-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/accordion-with-instruments-example/accordion-with-instruments-example.component.html'
    ),
    LESS: import(
      './examples/accordion-with-instruments-example/accordion-with-instruments-example.component.less?raw'
    ),
  };

  public readonly exampleOneExpandedAccordion: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/accordion-single-expand-example/accordion-single-expand-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/accordion-single-expand-example/accordion-single-expand-example.component.html'
    ),
    LESS: import(
      './examples/accordion-single-expand-example/accordion-single-expand-example.component.less?raw'
    ),
  };

  public readonly exampleMultipleExpandedAccordion: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/accordion-multiple-expand-example/accordion-multiple-expand-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/accordion-multiple-expand-example/accordion-multiple-expand-example.component.html'
    ),
    LESS: import(
      './examples/accordion-multiple-expand-example/accordion-multiple-expand-example.component.less?raw'
    ),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
