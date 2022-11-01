import {Inject, Injectable, OnDestroy} from "@angular/core";
import {PolymorphContent} from "../../directives/polymorph";
import {PZM_TOAST_ID, PzmToastOptions} from "./types";
import {PzmToastRef} from "./toast-ref";
import {generateToastId} from "./util";
import {PZM_TOAST_OPTIONS, PzmToastDefaultOptions} from "./toast-options";
import {PzmToastExistException} from "../../exceptions/toast-exist.exception";
import {Subject} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {PzmToastNotExistException} from "../../exceptions/toast-not-exist.exception";

export type ToastRefMap =  Map<PZM_TOAST_ID, PzmToastRef>;

@Injectable()
export class PzmToastService implements OnDestroy {
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
    @Inject(PZM_TOAST_OPTIONS) private readonly options: PzmToastDefaultOptions
  ) {}

  get size(): number {
    return this.refs.size
  }

  public create(
    content: PolymorphContent,
    options: PzmToastOptions = {}
  ): PzmToastRef {
    const id = options.id || generateToastId();
    if (this.refs.has(id)) throw new PzmToastExistException(id);

    const ref = new PzmToastRef(
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
      options.isPlatform ?? this.options.isPlatform,
    );

    this.refs.set(id, ref);
    this.detect();
    return ref;
  }

  public detect(): void {
    this.changesSource$.next();
  }

  public updateContent(
    id: PZM_TOAST_ID,
    content: PolymorphContent,
  ): void {
    if (!this.refs.has(id)) throw new PzmToastNotExistException(id);
    this.refs.get(id).updateContent(content);
  }

  public updateTitle(
    id: PZM_TOAST_ID,
    title: PzmToastOptions['title']
  ): PzmToastRef {
    if (!this.refs.has(id)) throw new PzmToastNotExistException(id);
    const ref = this.refs.get(id);
    ref.updateTitle(title);

    return ref;
  }

  public delete(
    id: PZM_TOAST_ID,
  ): void {
    if (!this.refs.has(id)) throw new PzmToastNotExistException(id);
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
