```ts
import { PrizmThemeService } from '@prizm-ui/theme';

export class PrizmThemeBaseExampleComponent {
  @ViewChild('myContainer', { static: true, read: ElementRef }) el!: ElementRef;

  constructor(public readonly theme: PrizmThemeService) {}

  public light(): void {
    this.theme.update('light');
  }

  public dark(): void {
    this.theme.update('dark');
  }

  public toggle(): void {
    this.theme.update(this.theme.getByElement(this.theme.rootElement) === 'light' ? 'dark' : 'light');
  }

  public updateMyContainerTheme(): void {
    this.theme.update('light', this.el.nativeElement);
  }
}
```
