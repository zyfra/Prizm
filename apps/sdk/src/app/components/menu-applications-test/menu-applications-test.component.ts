import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-menu-applications-test-component',
  templateUrl: './menu-applications-test.component.html',
  styleUrls: ['./menu-applications-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuApplicationsComponent {
  public activeItem = null;
  public tooltipDelay = 1000;
  public transition = {
    open: {
      duration: 300,
      delay: 500,
      timingFunction: 'ease-in',
    },
    close: {
      duration: 300,
      delay: 300,
      timingFunction: 'ease-out',
    },
  };
  public layoutShift = true;

  public topMenuItems = [
    { title: 'Z-QA — Zyfra Quality Assurance', icon: 'shapes-cube' },
    { title: 'Zyfra Document Explorer', icon: 'view-dashboard' },
    { title: 'Z-MEB — Mass & Energy Balance', icon: 'charts-bar-stacked' },
    { title: 'Z-PS — Zyfra Production Scheduling', icon: 'sitemap' },
    { title: 'Z-MEB — Mass & Energy Balance', icon: 'tools-eyedropper' },
  ];

  public bottomMenuItems = [
    { title: 'Избранное', icon: 'social-star' },
    { title: 'Поиск', icon: 'sort-zoom-in' },
    { title: 'Служба техподдежки', icon: 'alerts-pulse' },
  ];

  public selectItem(item: any): void {
    const isTopItem = this.topMenuItems.includes(item);

    if (isTopItem) {
      this.activeItem = item;
    } else {
      alert(JSON.stringify(item, null, 2));
    }
  }
}
