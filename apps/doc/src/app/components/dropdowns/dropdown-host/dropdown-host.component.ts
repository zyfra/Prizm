import {ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {PolymorphContent, ZuiOverlayOutsidePlacement} from '@digital-plant/zui-components';

@Component({
  selector: 'zui-dropdown-host-example',
  templateUrl: './dropdown-host.component.html',
  styleUrls: ['./dropdown-host.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownHostComponent {
  isOpen = false;
  content: PolymorphContent;

  autoReposition: boolean;

  placementVariants: ReadonlyArray<ZuiOverlayOutsidePlacement> = [
    ...Object.values(ZuiOverlayOutsidePlacement)
  ];
  placement: ZuiOverlayOutsidePlacement;
  closeOnBackdropClick = false;

  @ViewChild('withHeaderAndFooter') withHeaderAndFooter: TemplateRef<unknown>;
  @ViewChild('withHeader') withHeader: TemplateRef<unknown>;
  @ViewChild('withFooter') withFooter: TemplateRef<unknown>;
  @ViewChild('onlyContent') onlyContent: TemplateRef<unknown>;

  readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/template.ts'),
    HTML: import('!!raw-loader!./examples/with-template/template.html'),
  };

  constructor(public readonly cdRef: ChangeDetectorRef) {
  }
}
