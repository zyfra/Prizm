import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  zuiPure,
  ZuiToastAppearance,
  ZuiToastOptions,
  ZuiToastPosition,
  ZuiToastService,
} from '@digital-plant/zui-components';

@Component({
  selector: 'zui-example-example',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  readonly exampleToastInfo: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/toast-info-example/template.ts'),
    HTML: import('!!raw-loader!./examples/toast-info-example/template.html'),
  };

  readonly exampleToastWarning: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/toast-warning-example/template.ts'),
    HTML: import('!!raw-loader!./examples/toast-warning-example/template.html'),
  };

  readonly exampleToastDanger: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/toast-danger-example/template.ts'),
    HTML: import('!!raw-loader!./examples/toast-danger-example/template.html'),
  };

  readonly exampleToastSuccess: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/toast-success-example/template.ts'),
    HTML: import('!!raw-loader!./examples/toast-success-example/template.html'),
  };

  readonly appearanceVariants: ReadonlyArray<ZuiToastAppearance> = [
    'info',
    'success',
    'warning',
    'danger',
  ];
  appearance: ZuiToastAppearance = this.appearanceVariants[0];

  readonly containerId = 'test-inline-container';
  readonly positionVariants: ReadonlyArray<ZuiToastOptions['position']> = [
    ZuiToastPosition.TOP_RIGHT,
    ZuiToastPosition.TOP_LEFT,
    ZuiToastPosition.TOP_MIDDLE,
    ZuiToastPosition.BOTTOM_RIGHT,
    ZuiToastPosition.BOTTOM_LEFT,
    ZuiToastPosition.BOTTOM_MIDDLE,
    this.containerId
  ];
  position: ZuiToastOptions['position'] = this.positionVariants[0];
  timer = 3000;

  id = '';

  title: PolymorphContent = 'Заголовок';
  content: PolymorphContent = 'Содержимое';


  constructor(private readonly toastService: ZuiToastService) {}

  @zuiPure
  public getContentVariants(
    template: TemplateRef<Record<string, unknown>>,
  ): readonly PolymorphContent[] {
    return [
      'Привет',
      `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      'Lorem',
      template
    ];
  }

  public showToast(): void {
    this.toastService.create(
      this.content,
      {
        timer: this.timer,
        appearance: this.appearance,
        position: this.position,
        id: this.id,
        title: this.title
      }
    );
  }
}
