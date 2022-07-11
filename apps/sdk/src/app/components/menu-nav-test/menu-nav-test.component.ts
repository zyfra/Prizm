import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-menu-nav-test-component',
  templateUrl: './menu-nav-test.component.html',
  styleUrls: ['./menu-nav-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuNavComponent {
  public basic = [
    { label: 'Наименование ячейки 1' },
    { label: 'Наименование ячейки 2', routerLink: ['/page1'] },
    { label: 'Наименование ячейки 3 длиннее остальных' },
    { label: 'Наименование ячейки 4' },
    { label: 'Наименование ячейки 5' },
  ];
  public menuTitle = 'Наименование приложения';
}
