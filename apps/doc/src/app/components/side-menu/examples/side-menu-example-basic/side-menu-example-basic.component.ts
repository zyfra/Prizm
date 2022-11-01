import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pzm-side-menu-example-basic',
  templateUrl: './side-menu-example-basic.component.html',
  styleUrls: ['./side-menu-example-basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuExampleBasicComponent {
  public elementList: string[] = [
    'Элемент номер 1',
    'Элемент номер 2',
    'Элемент номер 3',
    'Элемент номер 4',
    'Элемент номер 5',
    'Элемент номер 6',
    'Элемент номер 7',
    'Элемент номер 8',
    'Элемент номер 9',
    'Элемент номер 10',
  ];

  public isSideMenuOpened = false;
  public selectedElementIdx = -1;
  public sideMenuType: 'col' | 'line' = 'line';

  public toggleElementState(idx: number): void {
    this.selectedElementIdx = this.selectedElementIdx === idx ? -1 : idx;
  }

  public changeSideMenuType(): void {
    this.sideMenuType = this.sideMenuType === 'line' ? 'col' : 'line';
  }

  public toggleSideMenu(): void {
    this.isSideMenuOpened = !this.isSideMenuOpened;
  }
}
