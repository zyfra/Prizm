import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { FormControl } from '@angular/forms';
import { ZuiDateItemTemplate, ZuiDay, ZuiTime } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-date-multi-example',
  templateUrl: './input-date-multi.component.html',
  styleUrls: ['./input-date-multi.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateMultiRelativeComponent implements OnInit {
  public readonly valueControl = new FormControl();
  @ViewChild('dateRelativeTime', { static: true }) dateRelativeTime: TemplateRef<unknown>;
  @ViewChild('dateTime', { static: true }) dateTime: TemplateRef<unknown>;

  public currentIdx = 0;
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
    );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/input-date-multi-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/input-date-multi-base-example.component.html'),
  };

  readonly exampleFour: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/four/input-date-multi-four-example.component.ts'),
    HTML: import('!!raw-loader!./examples/four/input-date-multi-four-example.component.html'),
  };

  public readonly timeControl = new FormControl([new ZuiDay(2017, 2, 15), new ZuiTime(12, 30)]);
  public readonly relativeControl = new FormControl();
  public items: ZuiDateItemTemplate[] = [];

  public ngOnInit(): void {
    this.items = [
      {
        template: this.dateTime,
        name: 'Абсолютное время'
      },
      {
        template: this.dateRelativeTime,
        name: 'Относительное время'
      },
    ]
  }
}
