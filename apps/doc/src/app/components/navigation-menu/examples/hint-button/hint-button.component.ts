import { Component, ChangeDetectionStrategy, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'prizm-example-hint-button',
  templateUrl: './hint-button.component.html',
  styleUrls: ['./hint-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintButtonComponent {
  @Input() item: { text: string };
  @Input() hintTemplate: TemplateRef<unknown>;
}
