import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LicenseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
