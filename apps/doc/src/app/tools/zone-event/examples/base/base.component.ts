import { Component } from '@angular/core';
import { PrizmToastService } from '@prizm-ui/components';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-zone-event-base-example',
  templateUrl: './base.component.html',
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .zone {
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
        background-color: rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class PrizmZoneEventBaseExampleComponent {
  readonly activeControl = new FormControl(true);
  constructor(private readonly toastService: PrizmToastService) {}

  public log(msg: string, isWarning = false): void {
    this.toastService.create(msg, {
      appearance: isWarning ? 'warning' : 'success',
    });
  }
}
