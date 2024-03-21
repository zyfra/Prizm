import { Component } from '@angular/core';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmLoaderComponent } from '@prizm-ui/components';
import { of } from 'rxjs';
import { delay, startWith } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { prizmIconsProvideLazyLoader } from '@prizm-ui/icons-loader';
import { prizmIconsFullProvideLazyLoader } from '@prizm-ui/icons-loader/full';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';

@Component({
  selector: 'prizm-icons-lazy-example',
  templateUrl: './icons-lazy-example.component.html',
  styleUrls: ['./icons-lazy-example.component.less'],
  standalone: true,
  providers: [
    /**
     * use our loader for the get the full icons without having to register
     * */
    prizmIconsFullProvideLazyLoader(),
    /**
     * use our loader for the get the icons without having to register
     * */
    prizmIconsProvideLazyLoader(),
  ],
  imports: [
    AsyncPipe,
    NgIf,
    PrizmIconsComponent,
    PrizmIconsFullComponent,
    PrizmLoaderComponent,
    PrizmIfLanguageDirective,
  ],
})
export class PrizmIconsLazyExampleComponent {
  readonly showLoader$ = of(false).pipe(delay(2500), startWith(true));
}
