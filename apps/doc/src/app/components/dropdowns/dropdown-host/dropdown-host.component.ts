import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PolymorphContent, PrizmOverlayOutsidePlacement } from '@prizm-ui/components';
import { prizmGenerateId } from '@prizm-ui/helpers';

@Component({
  selector: 'prizm-dropdown-host-example',
  templateUrl: './dropdown-host.component.html',
  styleUrls: ['./dropdown-host.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownHostComponent {
  public prizmDropdownHostId = 'dropdownHostId_' + prizmGenerateId();
  public delay = 0;
  public canOpen = true;
  public closeByEsc = true;
  public prizmDropdownHostCloseOnBackdropClick = true;
  public isOpenChange = false;
  isOpen = false;
  prizmDropdownHostWidth = 'auto';
  content: PolymorphContent;

  autoReposition: boolean;
  closeOnOutsideClick = true;

  placementVariants: ReadonlyArray<PrizmOverlayOutsidePlacement> = [
    ...Object.values(PrizmOverlayOutsidePlacement),
  ];
  placement: PrizmOverlayOutsidePlacement;

  @ViewChild('withHeaderAndFooter') withHeaderAndFooter: TemplateRef<unknown>;
  @ViewChild('withHeader') withHeader: TemplateRef<unknown>;
  @ViewChild('withFooter') withFooter: TemplateRef<unknown>;
  @ViewChild('onlyContent') onlyContent: TemplateRef<unknown>;

  readonly exampleModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('./examples/with-template/template.ts?raw'),
    HTML: import('./examples/with-template/template.html?raw'),
  };

  readonly exampleWithSelectPanel: TuiDocExample = {
    TypeScript: import('./examples/select-panel-example/select-panel-example.component.ts?raw'),
    HTML: import('./examples/select-panel-example/select-panel-example.component.html?raw'),
    LESS: import('./examples/select-panel-example/select-panel-example.component.less?raw'),
  };

  readonly exampleDateRangeList: TuiDocExample = {
    TypeScript: import('./examples/date-list-with-nested/date-list.component?raw'),
    HTML: import('./examples/date-list-with-nested/date-list.component.html?raw'),
  };

  readonly exampleDateRangeListEdit: TuiDocExample = {
    TypeScript: import('./examples/date-list-edit/date-list-edit.component?raw'),
    HTML: import('./examples/date-list-edit/date-list-edit.component.html?raw'),
  };

  readonly exampleCustomContext: TuiDocExample = {
    TypeScript: import('./examples/with-custom-context/with-custom-context.component?raw'),
    HTML: import('./examples/with-custom-context/with-custom-context.component.html?raw'),
  };

  readonly exampleCustomStyle: TuiDocExample = {
    TypeScript: import('./examples/custom-style/custom-style-example.component?raw'),
    HTML: import('./examples/custom-style/custom-style-example.component.html?raw'),
  };

  constructor(public readonly cdRef: ChangeDetectorRef) {}
}
