import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
