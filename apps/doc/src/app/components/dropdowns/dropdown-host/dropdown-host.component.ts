import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PolymorphContent, prizmGenerateId, PrizmOverlayOutsidePlacement } from '@prizm-ui/components';

@Component({
  selector: 'prizm-dropdown-host-example',
  templateUrl: './dropdown-host.component.html',
  styleUrls: ['./dropdown-host.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownHostComponent {
  public prizmDropdownHostId = 'dropdownHostId_' + prizmGenerateId();
  public parentZone = null;
  public delay = 0;
  public canOpen = true;
  public closeByEsc = true;
  public prizmDropdownHostCloseOnBackdropClick = true;
  public isOpenChange = false;
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
    TypeScript: import('!!raw-loader!./examples/date-list-with-nested/date-list.component'),
    HTML: import('!!raw-loader!./examples/date-list-with-nested/date-list.component.html'),
  };

  readonly exampleDateRangeListEdit: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/date-list-edit/date-list-edit.component'),
    HTML: import('!!raw-loader!./examples/date-list-edit/date-list-edit.component.html'),
  };

  readonly exampleCustomContext: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-custom-context/with-custom-context.component'),
    HTML: import('!!raw-loader!./examples/with-custom-context/with-custom-context.component.html'),
  };

  constructor(public readonly cdRef: ChangeDetectorRef) {}
}
