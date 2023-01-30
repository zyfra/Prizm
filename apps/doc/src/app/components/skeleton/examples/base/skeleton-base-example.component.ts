import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  public readonly activeControl = new FormControl(false);
  public readonly selectControl = new FormControl();
  public readonly toggleControl = new FormControl();
  public readonly value2Disabled = new FormControl(false);

  public ngOnInit(): void {
    this.value2Disabled.disable();
  }
}
