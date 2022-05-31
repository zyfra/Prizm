import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-input-statuses-example',
  templateUrl: './input-statuses-example.component.html',
  styleUrls: ['./input-statuses-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputStatusesExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
