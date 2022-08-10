import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-tabview-test',
  templateUrl: './tabview-test.component.html',
  styleUrls: ['./tabview-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabViewComponent {
  public tabs = [
    {
      header: 'Наименование вкладки 1',
      content: 'Content of tab 1',
    },
    {
      header: 'Наименование вкладки 2',
      content: 'Content of tab 2',
    },
    {
      header: 'Наименование вкладки 3',
      content: `Много текста Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et sodales diam. Proin augue purus, ultricies eget quam sit amet, feugiat elementum tellus. Integer ultrices sem justo, nec sollicitudin lorem lobortis ut. Maecenas finibus nisl vitae ipsum cursus, at ullamcorper dui sodales. Nulla non convallis lacus. In neque lacus, imperdiet eget neque id, lacinia viverra ipsum. Vestibulum pharetra vestibulum augue vel faucibus. Nam in iaculis magna, id maximus ex. Nullam at suscipit lectus, eget convallis urna. Fusce nec rhoncus massa, vel tristique arcu. Ut pharetra lacus eu lorem fringilla auctor. Vestibulum convallis sollicitudin ligula in vestibulum. Donec et interdum nisi. Donec semper, eros eu ultricies egestas, nisl leo efficitur urna, in facilisis turpis nisi at elit. Proin finibus ac diam iaculis hendrerit. Vivamus non arcu urna.`,
    },
    {
      header: 'Наименование вкладки 4',
      content: 'Content of tab 4',
    },
  ];
}
