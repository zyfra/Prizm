import { Component, ChangeDetectionStrategy } from '@angular/core';

interface SomeData {
  label: string;
  checked: boolean;
  children?: Array<SomeData>;
}

@Component({
  selector: 'prizm-checkbox-group-example',
  templateUrl: './checkbox-group-example.component.html',
  styleUrls: ['./checkbox-group-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmCheckboxGroupExampleComponent {
  data: Array<SomeData> = [
    { label: 'Родительский элемент 1', checked: false },
    { label: 'Родительский элемент 2', checked: false },

    {
      label: 'Родительский элемент 3',
      checked: false,
      children: [
        { label: 'Дочерний элемент 1', checked: false },
        { label: 'Дочерний элемент 2', checked: false },
        { label: 'Дочерний элемент 3', checked: false },
      ],
    },
  ];

  public someChecked(group: SomeData): boolean {
    if (group.children) {
      const checked = group.children.filter(child => child.checked);
      return checked.length > 0 && checked.length < group.children.length;
    }

    return false;
  }

  public setAll(value: boolean, group: Array<SomeData>): void {
    for (const checkbox of group) {
      checkbox.checked = value;
    }
  }

  public allChecked(group: Array<SomeData>): boolean {
    return group.every(checkbox => checkbox.checked);
  }
}
