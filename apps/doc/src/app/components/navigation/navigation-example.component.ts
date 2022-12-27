import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { IconDefs, IndicatorStatus, PrizmContent } from '@prizm-ui/components';

@Component({
  selector: 'prizm-navigation-example',
  templateUrl: './navigation-example.component.html',
  styleUrls: ['./navigation-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationExampleComponent {
  public readonly exampleNavigationBasic: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/navigation-basic-example/navigation-basic-example.component'),
    HTML: import('!!raw-loader!./examples/navigation-basic-example/navigation-basic-example.component.html'),
    LESS: import('./examples/navigation-basic-example/navigation-basic-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  // Navigation module btn
  iconVariants: ReadonlyArray<PrizmContent> = ['', ...IconDefs.reduce((a, c) => a.concat(c.data), [])];
  public icon: PrizmContent = this.iconVariants[1];
  public alertsCount = 3;
  public title = 'Название';
  public readonly statusVariants: IndicatorStatus[] = ['info', 'secondary', 'success', 'warning', 'danger'];
  public status: IndicatorStatus = this.statusVariants[2];

  // Navigation menu btn
  public isActive = false;
}
