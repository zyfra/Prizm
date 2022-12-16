import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-design-system',
  templateUrl: './design-system.component.html',
  styleUrls: ['./design-system.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DesignSystemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
