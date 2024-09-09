import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiActiveZoneModule, TuiSwipeService } from '@taiga-ui/cdk';
import { PolymorpheusContent, PolymorpheusModule } from '@tinkoff/ng-polymorpheus';
import { merge, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, mapTo, startWith } from 'rxjs/operators';

import { PRIZM_DOC_MENU_TEXT } from '../../tokens/i18n';
import { PRIZM_DOC_LOGO } from '../../tokens/logo';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { PrizmDocNavigationModule } from '../../components/navigation/navigation.module';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `header[prizmDocHeader]`,
  templateUrl: `./header.template.html`,
  styleUrls: [`./header.style.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    PolymorpheusModule,
    TuiButtonModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    PrizmDocNavigationModule,
  ],
})
export class PrizmDocHeaderComponent {
  private readonly stream$ = new Subject<boolean>();

  readonly open$ = merge(
    this.router.events.pipe(mapTo(false)),
    this.stream$,
    this.swipes$.pipe(
      filter(swipe => swipe.direction === `left` || swipe.direction === `right`),
      map(swipe => swipe.direction === `right`)
    )
  ).pipe(startWith(false), distinctUntilChanged());

  constructor(
    @Inject(PRIZM_DOC_LOGO) readonly logo: PolymorpheusContent,
    @Inject(PRIZM_DOC_MENU_TEXT) readonly menu: string,
    @Inject(Router) private readonly router: Router,
    @Inject(TuiSwipeService) private readonly swipes$: TuiSwipeService
  ) {}

  public onClick(): void {
    this.stream$.next(true);
  }

  public onActiveZone(active: boolean): void {
    if (!active) {
      this.stream$.next(false);
    }
  }
}
