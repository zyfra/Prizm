import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import { PolymorphContent, PrizmOverlayOutsidePlacement } from '@prizm-ui/components';

@Component({
  selector: 'prizm-dropdown-host-example',
  templateUrl: './dropdown-host.component.html',
  styleUrls: ['./dropdown-host.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownHostComponent {
  isOpen = false;
  prizmDropdownHostWidth = 'auto';
  content: PolymorphContent;

  autoReposition: boolean;

  placementVariants: ReadonlyArray<PrizmOverlayOutsidePlacement> = [
    ...Object.values(PrizmOverlayOutsidePlacement),
  ];
  placement: PrizmOverlayOutsidePlacement;
  closeOnBackdropClick = false;

  @ViewChild('withHeaderAndFooter') withHeaderAndFooter: TemplateRef<unknown>;
  @ViewChild('withHeader') withHeader: TemplateRef<unknown>;
  @ViewChild('withFooter') withFooter: TemplateRef<unknown>;
  @ViewChild('onlyContent') onlyContent: TemplateRef<unknown>;

  readonly exampleModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/template.ts'),
    HTML: import('!!raw-loader!./examples/with-template/template.html'),
  };

  readonly exampleWithSelectPanel: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/select-panel-example/select-panel-example.component.ts'),
    HTML: import('!!raw-loader!./examples/select-panel-example/select-panel-example.component.html'),
    LESS: import('./examples/select-panel-example/select-panel-example.component.less?raw'),
  };

  readonly exampleDateRangeList: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/date-list/date-list.component'),
    HTML: import('!!raw-loader!./examples/date-list/date-list.component.html'),
  };

  readonly exampleDateRangeListEdit: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/date-list-edit/date-list-edit.component'),
    HTML: import('!!raw-loader!./examples/date-list-edit/date-list-edit.component.html'),
  };

  constructor(public readonly cdRef: ChangeDetectorRef) {}
}
