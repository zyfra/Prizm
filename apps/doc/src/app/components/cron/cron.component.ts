import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmCronPeriod, PrizmCronTabItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-cron-example',
  templateUrl: './cron.component.html',
  styleUrls: ['./cron.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CronComponent {
  public periodVariants: ReadonlyArray<PrizmCronPeriod> = [];
  public period: PrizmCronPeriod = {
    start: null,
    indefinitely: true,
    end: null,
  };
  public disabled = false;
  public minHeight: string | null = null;
  public width: string | null = null;
  public autoSubmit = false;
  public hidePeriod = false;
  public hideResult = false;
  public selected: PrizmCronTabItem = 'month';
  tabs: PrizmCronTabItem[] = ['hour', 'day', 'month', 'year'];
  readonly allTabs: PrizmCronTabItem[] = ['second', 'minute', 'hour', 'day', 'month', 'year'];
  public value: string;
  readonly tabsVariants: ReadonlyArray<PrizmCronTabItem[]> = [
    ['second', 'minute', 'hour', 'day', 'month', 'year'],
    ['hour', 'day', 'month', 'year'],
    ['day', 'month', 'year'],
  ];
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/cron-base-example.component.ts?raw'),
    HTML: import('./examples/base/cron-base-example.component.html?raw'),
  };

  readonly exampleSpecifiedTabs: TuiDocExample = {
    TypeScript: import('./examples/specified-tabs/cron-specified-tabs-example.component.ts?raw'),
    HTML: import('./examples/specified-tabs/cron-specified-tabs-example.component.html?raw'),
  };
  readonly exampleFullwidthCron: TuiDocExample = {
    TypeScript: import('./examples/fullwidth/cron-fullwidth-example.component.ts?raw'),
    HTML: import('./examples/fullwidth/cron-fullwidth-example.component.html?raw'),
  };
  readonly exampleFilteredListCron: TuiDocExample = {
    TypeScript: import('./examples/filtered-list/cron-filtered-list-example.component.ts?raw'),
    HTML: import('./examples/filtered-list/cron-filtered-list-example.component.html?raw'),
  };
}
