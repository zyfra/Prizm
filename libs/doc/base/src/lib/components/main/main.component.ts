import {
  Component,
  EventEmitter,
  forwardRef,
  HostBinding,
  Inject,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { LOCAL_STORAGE, WINDOW } from '@ng-web-apis/common';
import { TuiSwipeService } from '@taiga-ui/cdk';
import { TuiBrightness, TuiModeDirective } from '@taiga-ui/core';
import { Subject } from 'rxjs';

@Component({
  selector: `prizm-doc-main`,
  templateUrl: `./main.template.html`,
  styleUrls: [`./main.style.less`],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: TuiModeDirective,
      useExisting: forwardRef(() => PrizmDocMainComponent),
    },
    TuiSwipeService,
  ],
})
export class PrizmDocMainComponent {
  night =
    this.storage.getItem(`night`) === `true` ||
    (this.storage.getItem(`night`) === null &&
      this.windowRef.matchMedia(`(prefers-color-scheme: dark)`).matches);

  readonly change$ = new Subject<void>();

  @Output() contentReady: EventEmitter<HTMLElement> = new EventEmitter();

  constructor(
    @Inject(LOCAL_STORAGE) private readonly storage: Storage,
    @Inject(WINDOW) private readonly windowRef: Window
  ) {}

  @HostBinding(`attr.data-mode`)
  get mode(): TuiBrightness | null {
    return this.night ? `onDark` : null;
  }

  public onMode(night: boolean): void {
    this.night = night;
    this.change$.next();
    this.storage.setItem(`night`, String(night));
  }
}
