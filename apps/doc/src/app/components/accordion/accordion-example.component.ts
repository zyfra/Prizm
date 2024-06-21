import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PolymorphContent, PrizmAccordionItemData } from '@prizm-ui/components';
import { PRIZM_ICONS_NAMES } from '@prizm-ui/icons/base/names';
import { prizmIconsProvideLazyLoader } from '@prizm-ui/icons-loader';

@Component({
  selector: 'prizm-accordion-example',
  templateUrl: './accordion-example.component.html',
  styleUrls: ['./accordion-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [prizmIconsProvideLazyLoader()],
})
export class AccordionExampleComponent {
  public disabled = false;
  public onlyOneExpanded = false;
  public title: PolymorphContent<PrizmAccordionItemData> = 'Title number 2';
  public iconVariants: ReadonlyArray<PolymorphContent> = ['', ...PRIZM_ICONS_NAMES];
  public icon: PolymorphContent = this.iconVariants[0];
  public isExpanded = false;
  public prizmAccordionHeaderExpandedBorderColor = '';

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
