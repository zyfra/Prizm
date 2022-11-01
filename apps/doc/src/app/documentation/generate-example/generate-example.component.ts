import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pzm-generate-example',
  templateUrl: './generate-example.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenerateExampleComponent {}
