import {ZuiToastOptions} from "./types";
import {ReplaySubject, Subject, timer} from "rxjs";
import {ZuiToastDefaultOptions} from "./toast-options";
import {takeUntil, tap} from "rxjs/operators";
import { PolymorphContent } from "../../directives/polymorph";
import { ZuiToastService } from "./toast.service";
import {generateId} from "../../util";

export class ZuiToastRef {
  private show$ = new ReplaySubject<boolean>(1);
  private destroy$ = new Subject<void>();
  private hash_ = generateId();
  get hash(): string {
    return this.hash_;
  };
  constructor(
    public content: PolymorphContent,
    readonly weight: ZuiToastOptions['weight'],
    readonly closeAfter: ZuiToastOptions['timer'],
    public title: ZuiToastOptions['title'],
    readonly data: ZuiToastOptions['data'],
    readonly position: ZuiToastOptions['position'],
    readonly id: ZuiToastOptions['id'],
    readonly appearance: ZuiToastOptions['appearance'],
    readonly options: ZuiToastDefaultOptions,
    readonly toastService: ZuiToastService,
    public show: boolean = true,
  ) {
    if (this.show) this.open();
    if (this.closeAfter) this.close(this.closeAfter);
  }

  public readonly destroy = (): void => {
    this.destroy$.next();
  }

  public readonly close = (closeAfterMs?: number): void => {
    this.destroy();
    if (!closeAfterMs) {
      this.toastService.delete(this.id);
    }

    if (!closeAfterMs) return void this.changeVisibleState(false);
    timer(closeAfterMs).pipe(
      tap(() => this.close()),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  public readonly open = (): void => {
    this.changeVisibleState(true);
  }

  public readonly updateContent = (content: PolymorphContent): void => {
    if (content === this.content) return;
    this.content = content;
    this.detect();
  }

  public readonly updateTitle = (title: ZuiToastOptions['title']): void => {
    if (title === this.title) return;
    this.title = title;
    this.detect();
  }


  private changeVisibleState(show: boolean): void {
    this.show$.next(this.show = show);
    this.detect();
  }

  private detect(): void {
    this.hash_ = generateId();
    this.toastService.detect();
  }
}
