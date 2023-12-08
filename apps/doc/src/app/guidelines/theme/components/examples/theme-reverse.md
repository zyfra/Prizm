```ts
import { PrizmThemeInvertedDirective } from '@prizm-ui/theme';

export class MyInvertedThemeContainerComponent implements OnInit {
  // create a class of themeInvertedDirective
  readonly themeInvertedDirective = new PrizmThemeInvertedDirective();

  public ngOnInit(): void {
    // call for themeInvertedDirective OnInit method
    this.themeInvertedDirective.ngOnInit();
  }
}
```
