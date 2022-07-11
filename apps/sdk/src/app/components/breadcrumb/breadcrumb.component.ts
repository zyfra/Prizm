import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-breadcrumb-test',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  public items = [
    { label: 'Начало' },
    { label: 'Название цеха1' },
    { label: 'Название цеха2' },
    { label: 'Название цеха3' },
    { label: 'Название цеха4' },
    { label: 'Название цеха5' },
    { label: 'Название цеха6' },
    { label: 'Конкретный цех', url: 'https://en.wikipedia.org/wiki/' },
  ];

  public home = { icon: 'zyfra-icon social-home-breadcrumbs' };
}
