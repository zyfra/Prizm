import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/taiga-ui/addon-doc';
import {
  PolymorphContent,
  PrizmContextWithImplicit,
  PrizmCronTabItem,
  PrizmSizeL,
  PrizmSizeM,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-example',
  templateUrl: './cron.component.html',
  styleUrls: ['./cron.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CronComponent {

  public selected: PrizmCronTabItem = 'month';
  tabs: PrizmCronTabItem[] = [
    'hour',
    'day',
    'month',
    'year',
  ]
  readonly allTabs: PrizmCronTabItem[] = [
    'second',
    'minute',
    'hour',
    'day',
    'month',
    'year',
  ];
  public value: string;
  readonly tabsVariants: ReadonlyArray<PrizmCronTabItem[]> = [
    [
      'second',
      'minute',
      'hour',
      'day',
      'month',
      'year',
    ],
    [
      'hour',
      'day',
      'month',
      'year',
    ],
    [
      'day',
      'month',
      'year',
    ]
  ];
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/cron-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/cron-base-example.component.html'),
  };

  readonly exampleSpecifiedTabs: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/specified-tabs/cron-specified-tabs-example.component.ts'),
    HTML: import('!!raw-loader!./examples/specified-tabs/cron-specified-tabs-example.component.html'),
  };
}
