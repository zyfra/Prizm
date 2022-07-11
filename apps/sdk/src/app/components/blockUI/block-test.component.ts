import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-block-test',
  templateUrl: './block-test.component.html',
  styleUrls: ['./block-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockTestComponent {
  public blockedDocument = false;

  public block(): void {
    this.blockedDocument = true;
    setTimeout(() => {
      this.blockedDocument = false;
    }, 3000);
  }
}
