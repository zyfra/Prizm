import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import { PolymorphContent } from '@prizm-ui/components';
import { prizmPure } from '@prizm-ui/core';

@Component({
  selector: 'prizm-widget-example',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent {
  public header = 'Содержимое виджета';
  public title = 'Заголовок виджета';
  public icons: string[] = [];
  public iconVariants: ReadonlyArray<PolymorphContent> = [
    ['account-circle', 'account-circle', 'account-key'],
    '',
    null,
    ['account-key'],
  ];
  public content = 'Содержимое виджета';

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/widget-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/widget-base-example.component.html'),
  };

  public readonly exampleWithButtons: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-buttons/widget-with-buttons-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-buttons/widget-with-buttons-example.component.html'),
  };

  @prizmPure
  public getIconVariants(...templates: TemplateRef<unknown>[]): ReadonlyArray<PolymorphContent> {
    return [...templates, ...this.iconVariants];
  }
  @prizmPure
  public getHeaderVariants(...templates: TemplateRef<unknown>[]): ReadonlyArray<PolymorphContent> {
    return [null, ...templates];
  }
}
