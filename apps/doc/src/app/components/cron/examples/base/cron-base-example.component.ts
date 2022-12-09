import { Component } from '@angular/core';

@Component({
  selector: 'prizm-cron-base-example',
  templateUrl: './cron-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmCronBaseExampleComponent {
  public value = true;
}
