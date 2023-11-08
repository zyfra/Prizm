import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-header',
  templateUrl: './prizm-header.component.html',
  styleUrls: ['./prizm-header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PrizmHeaderComponent {}
