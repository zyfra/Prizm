import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-skeleton-base-example',
  templateUrl: './skeleton-base-example.component.html',
  styles: [
    `
      .header {
        margin: 8px 0;
        padding: 8px 0;
        border-bottom: 1px solid var(--prizm-border-widget);
      }

      .body {
        margin-top: 16px;
        display: flex;
        gap: 1rem;
        flex-direction: column;
      }
    `,
  ],
})
export class PrizmSkeletonBaseExampleComponent implements OnInit {
  public items = [];
  public readonly activeControl = new UntypedFormControl(false);
  public readonly selectControl = new UntypedFormControl();
  public readonly toggleControl = new UntypedFormControl();
  public readonly value2Disabled = new UntypedFormControl(false);

  public ngOnInit(): void {
    this.value2Disabled.disable();
  }
}
