import { Component, OnInit } from '@angular/core';
import { PrizmOverlayControl } from '@prizm-ui/components';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-theme-base-example',
  templateUrl: './base.component.html',
  styles: [
    `.block {display: flex; gap: 1rem}`
  ]
})
export class PrizmThemeBaseExampleComponent {
  constructor(public readonly theme: PrizmThemeService) {}

  public light(): void {
    this.theme.update('light');
  }

  public dark(): void {
    this.theme.update('dark');
  }

  public toggle(): void {
    this.theme.update(
      this.theme.getByElement(this.theme.rootElement) === 'light' ? 'dark' : 'light'
    );
  }
}
