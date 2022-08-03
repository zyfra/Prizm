import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zui-generate-example',
  templateUrl: './generate-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenerateExampleComponent {}
