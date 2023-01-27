import { PrizmToastOptions } from './types';
import { ReplaySubject, Subject, timer } from 'rxjs';
import { PrizmToastDefaultOptions } from './toast-options';
import { takeUntil, tap } from 'rxjs/operators';
import { PolymorphContent } from '../../directives/polymorph';
import { PrizmToastService } from './toast.service';
import { prizmGenerateId } from '../../util';

export class PrizmToastRef {
  private show$ = new ReplaySubject<boolean>(1);
  private destroy$ = new Subject<void>();
  private hash_ = prizmGenerateId();
  get hash(): string {
    return this.hash_;
  }
  get buttonAppearance(): string {
    return this.appearance === 'info' ? 'primary' : this.appearance;
  }
  constructor(
    public content: PolymorphContent,
    readonly weight: PrizmToastOptions['weight'],
    readonly closeAfter: PrizmToastOptions['timer'],
    public title: PrizmToastOptions['title'],
    readonly data: PrizmToastOptions['data'],
    readonly position: PrizmToastOptions['position'],
    readonly id: PrizmToastOptions['id'],
    readonly appearance: PrizmToastOptions['appearance'],
    readonly options: PrizmToastDefaultOptions,
    readonly toastService: PrizmToastService,
    public show: boolean = true,
    readonly isPlatform: PrizmToastOptions['isPlatform']
  ) {
    if (this.show) this.open();
    if (this.closeAfter) this.close(this.closeAfter);
  }

  public readonly destroy = (): void => {
    this.destroy$.next();
  };

  public readonly close = (closeAfterMs?: number): void => {
    this.destroy();
    if (!closeAfterMs) {
      this.toastService.delete(this.id);
    }

    if (!closeAfterMs) return void this.changeVisibleState(false);
    timer(closeAfterMs)
      .pipe(
        tap(() => this.close()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  };

  public readonly open = (): void => {
    this.changeVisibleState(true);
  };

  public readonly updateContent = (content: PolymorphContent): void => {
    if (content === this.content) return;
    this.content = content;
    this.detect();
  };

  public readonly updateTitle = (title: PrizmToastOptions['title']): void => {
    if (title === this.title) return;
    this.title = title;
    this.detect();
  };

  private changeVisibleState(show: boolean): void {
    this.show$.next((this.show = show));
    this.detect();
  }

  private detect(): void {
    this.hash_ = prizmGenerateId();
    this.toastService.detect();
  }
}
