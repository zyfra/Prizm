import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-input-search-example',
  templateUrl: './input-search-example.component.html',
  styleUrls: ['./input-search-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchExampleComponent {
  public search(value: string): void {
    console.log('search', value);
  }
}
