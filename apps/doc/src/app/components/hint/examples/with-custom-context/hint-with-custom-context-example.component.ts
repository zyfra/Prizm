import { Component, ViewChild } from '@angular/core';
import { PrizmButtonComponent, PrizmHintDirective } from '@prizm-ui/components';

@Component({
  selector: 'prizm-hint-with-custom-context-example',
  templateUrl: './hint-with-custom-context-example.component.html',
  standalone: true,
  imports: [PrizmHintDirective, PrizmButtonComponent],
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmHintWithCustomContextExampleComponent {
  public context = { name: 'Moscow', country: 'Russia' };
  @ViewChild('button', { read: PrizmHintDirective }) directive!: PrizmHintDirective;
  public updateContext() {
    this.context = {
      ...this.context,
      name: this.context.name === 'Moscow' ? 'Saint Petersburg' : 'Moscow',
    };
  }
}
