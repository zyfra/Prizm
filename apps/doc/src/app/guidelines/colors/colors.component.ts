import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prizm-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorsComponent {}
