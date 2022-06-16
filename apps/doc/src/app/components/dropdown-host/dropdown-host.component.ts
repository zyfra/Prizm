import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {PolymorpheusContent, ZuiContextWithImplicit, ZuiSizeL, ZuiSizeM} from '@digital-plant/zui-components';
import {ZuiOverlayOutsidePlacement} from "../../../../../../libs/next/src/lib/modules/overlay";

@Component({
  selector: 'zui-dropdown-host-example',
  templateUrl: './dropdown-host.component.html',
  styleUrls: ['./dropdown-host.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownHostComponent {
  isOpen = false;
  content: PolymorpheusContent;

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
    '!!raw-loader!./examples/import-module.md'
  );

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/template.ts'),
    HTML: import('!!raw-loader!./examples/with-template/template.html'),
  };

  constructor(public readonly cdRef: ChangeDetectorRef) {
  }
}
