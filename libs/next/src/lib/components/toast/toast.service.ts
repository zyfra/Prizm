import {Inject, Injectable, OnDestroy} from "@angular/core";
import {PolymorphContent} from "../../directives/polymorph";
import {ZUI_TOAST_ID, ZuiToastOptions} from "./types";
import {ZuiToastRef} from "./toast-ref";
import {generateToastId} from "./util";
import {ZUI_TOAST_OPTIONS, ZuiToastDefaultOptions} from "./toast-options";
import {ZuiToastExistException} from "../../exceptions/toast-exist.exception";
import {Subject} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {ZuiToastNotExistException} from "../../exceptions/toast-not-exist.exception";

export type ToastRefMap =  Map<ZUI_TOAST_ID, ZuiToastRef>;

@Injectable()
export class ZuiToastService implements OnDestroy {
  /* main storage for control by id */
  private readonly refs: ToastRefMap = new Map();
  private readonly changesSource$ = new Subject();
  readonly changes$ = this.changesSource$.pipe(
    map(
      () => [...this.refs.values()]
      .sort((a, b) => b.weight - a.weight)
    ),
    shareReplay(1)
  );

  readonly destroy$ = new Subject<void>();

  constructor(
    @Inject(ZUI_TOAST_OPTIONS) private readonly options: ZuiToastDefaultOptions
  ) {}

  get size(): number {
    return this.refs.size
  }

  public create(
    content: PolymorphContent,
    options: ZuiToastOptions = {}
  ): ZuiToastRef {
    const id = options.id || generateToastId();
    if (this.refs.has(id)) throw new ZuiToastExistException(id);

    const ref = new ZuiToastRef(
      content,
      options.weight ?? 0,
      options.timer ?? this.options.timer,
      options.title ?? this.options.title,
      options.data ?? this.options.data,
      options.position ?? this.options.position,
      id,
      options.appearance ?? this.options.appearance,
      this.options,
      this,
      options.show,
    );

    this.refs.set(id, ref);
    this.detect();
    return ref;
  }

  public detect(): void {
    this.changesSource$.next();
  }

  public updateContent(
    id: ZUI_TOAST_ID,
    content: PolymorphContent,
  ): void {
    if (!this.refs.has(id)) throw new ZuiToastNotExistException(id);
    this.refs.get(id).updateContent(content);
  }

  public updateTitle(
    id: ZUI_TOAST_ID,
    title: ZuiToastOptions['title']
  ): ZuiToastRef {
    if (!this.refs.has(id)) throw new ZuiToastNotExistException(id);
    const ref = this.refs.get(id);
    ref.updateTitle(title);

    return ref;
  }

  public delete(
    id: ZUI_TOAST_ID,
  ): void {
    if (!this.refs.has(id)) throw new ZuiToastNotExistException(id);
    this.refs.get(id).destroy();
    this.refs.delete(id);
    this.detect();
  }

  public deleteAll(): void {
    this.refs.forEach(
      (_, id) => {
        this.delete(id)
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
