import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prizm-plugin-example',
  templateUrl: './plugin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PluginComponent {}
