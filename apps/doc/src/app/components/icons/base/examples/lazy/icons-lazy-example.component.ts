import { Component } from '@angular/core';
import { PrizmIconsFullComponent, PrizmIconsComponent } from '@prizm-ui/icons';
import { PrizmLoaderComponent } from '@prizm-ui/components';
import { of } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
@Component({
  selector: 'prizm-icons-lazy-example',
  templateUrl: './icons-lazy-example.component.html',
  styleUrls: ['./icons-lazy-example.component.less'],
  standalone: true,
  imports: [AsyncPipe, NgIf, PrizmIconsComponent, PrizmIconsFullComponent, PrizmLoaderComponent],
})
export class PrizmIconsLazyExampleComponent {
  readonly showLoader$ = of(false).pipe(delay(10000), startWith(true));
}
