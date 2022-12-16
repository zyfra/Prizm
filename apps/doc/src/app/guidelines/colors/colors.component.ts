import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'prizm-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
