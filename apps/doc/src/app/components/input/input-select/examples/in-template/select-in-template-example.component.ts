import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PrizmSidebarService } from '@prizm-ui/components';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'prizm-select-in-template-example',
  templateUrl: './select-in-template-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
  providers: [PrizmDestroyService],
})
export class PrizmSelectInTemplateExampleComponent {
  readonly formGroup = new FormGroup({
    main: new FormControl(null, [Validators.required]),
  });
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly control = new FormControl(null, [Validators.required]);

  constructor(
    private readonly sidebarService: PrizmSidebarService,
    private readonly destroy$: PrizmDestroyService
  ) {}

  public setValue(value): void {
    this.formGroup.get('main').setValue(value);
  }

  public openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
    this.sidebarService
      .open(templateRef, {
        width: '500px',
        position: 'r',
        size: 'm',
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
