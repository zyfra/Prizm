import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingStartedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
