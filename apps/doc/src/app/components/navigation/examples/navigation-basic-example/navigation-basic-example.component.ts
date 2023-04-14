import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { INavigationTree } from '@prizm-ui/components';
import { NAVIGATION_EXAMPLE } from '../../navigation-example.const';
import { map } from 'rxjs/operators';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-navigation-basic-example',
  templateUrl: './navigation-basic-example.component.html',
  styleUrls: ['./navigation-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBasicExampleComponent {
  @Input() public isNavigationAbsolute = false;

  public data: INavigationTree[] = NAVIGATION_EXAMPLE;
  public openDropdown = false;
  public openNavigation = true;
  public currentNavElementIdx = 0;

  public readonly logo = 'assets/example/logo-dark.png';

  constructor(private readonly themeSwitcher: PrizmThemeService) {}

  public toggleNavigation(): void {
    this.openNavigation = !this.openNavigation;
  }

  public changeNavElement(idx: number): void {
    this.currentNavElementIdx = idx;
  }
}
