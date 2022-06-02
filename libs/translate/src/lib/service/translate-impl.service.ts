import { EventEmitter, Injectable } from '@angular/core';
import {
  TranslateService,
  TranslateCompiler,
  TranslateParser,
  TranslateLoaderFactory,
  IChunk,
} from '../core';
import { Observable, of, Subscriber } from 'rxjs';
import { map, share, take, finalize } from 'rxjs/operators';

import { TranslateStore } from './translate.store';
import { IChunkExt } from '../interface/i-chunk-ext';
import { isDefined } from '../util';
import { ITranslateStore } from '../interface/i-translate-store';

@Injectable()
export class TranslateImplService implements TranslateService {
  /**
   * Текущий язык
   */
  private _lang: string;

  /** После загрузки переводов
   * устанавливает язык текущим
   */
  private nextLang: string;

  /** Наблюдаемая за загрузкой переводов */
  private loadingTranslations: Observable<void>;

  private loadingSubscriber: Subscriber<void>;

  private chunks = new Map<string, IChunkExt>();

  private loadingChunk = new Set<string>();

  public onLang = new EventEmitter<string>();

  constructor(
    private store: TranslateStore,
    private compiler: TranslateCompiler,
    private parser: TranslateParser,
    private loaderFactory: TranslateLoaderFactory
  ) { }

  public use(lang: string): Observable<void> {
    return lang === this.lang ? of(undefined) : this.applyLang(lang);
  }

  public get lang(): string {
    return this._lang;
  }

  public addChunk(chunk: IChunk): void {
    if (!this.chunks.has(chunk.id)) {
      const res: IChunkExt = {
        ...chunk,
        initLangs: new Set<string>(),
        lang: null,
        loader: this.loaderFactory.loader(chunk.id),
      };
      this.chunks.set(res.id, res);

      if (this.nextLang) {
        this.setLangByChunk(res, this.nextLang);
      }
    }
  }

  /**
   * Gets the translated value of a key (or an array of keys)
   * @returns the translated key, or an object of translated keys
   */
  public get(key: string, interpolateParams?: Object): Observable<string> {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }
    let result: Observable<string>;
    // check if we are loading a new translation to use
    if (this.loadingTranslations) {
      result = this.loadingTranslations.pipe(
        map((_) => this.getParsedResult(this.translation(key), key, interpolateParams))
      );
    } else {
      result = of(this.getParsedResult(this.translation(key), key, interpolateParams));
    }
    return result;
  }

  private translation(key: string): ITranslateStore {
    return this.store.translations[this.currentLang(key)] as ITranslateStore;
  }

  private currentLang(key: string): string {
    let result = this.lang;
    const keys = key.split('.');
    let chunkId = '';
    for (const key of keys) {
      chunkId += key;
      if (this.chunks.has(chunkId)) {
        result = this.chunks.get(chunkId).lang;
        break;
      }
      chunkId += '.';
    }
    return result;
  }

  private setLangByChunk(chunk: IChunkExt, lang: string): void {
    const currentLang = this.tryUseChunkLang(lang, chunk)

    if (chunk.lang !== currentLang) {
      const key = this.loadingChunkKey(chunk.id, currentLang);
      // проверка, когда слишком много подписок на смену языка
      // нужно загрузить только раз
      if (!this.loadingChunk.has(key)) {
        this.loadingChunk.add(key);
        this.initChangeLang();
        const loading$ = chunk.initLangs.has(currentLang)
          ? of(currentLang)
          : chunk.loader.getTranslation(currentLang).pipe(
            map((translation: object) => {
              const translations = this.compiler.compileTranslations(translation, currentLang);
              const currentTranslation = <ITranslateStore>this.store.translations[currentLang];
              this.store.translations[currentLang] = currentTranslation
                ? { ...translations, ...currentTranslation }
                : translations;
              chunk.initLangs.add(currentLang);
              return currentLang;
            })
          );
        loading$
          .pipe(
            take(1),
            finalize(() => this.checkAllLoaded(key))
          )
          .subscribe((lang) => {
            if (lang === this.tryUseChunkLang(this.nextLang, chunk)) {
              chunk.lang = lang;
            }
          });
      }
    }
  }

  private tryUseChunkLang(lang: string, chunk: IChunkExt): string {
    return chunk.supportedLangs.includes(lang) ? lang : chunk.defaultLang;
  }

  private applyLang(lang: string): Observable<void> {
    this.nextLang = lang;
    this.chunks.forEach((chunk) => this.setLangByChunk(chunk, this.nextLang));
    let result: Observable<void> = of(undefined);
    if (this.loadingTranslations) {
      result = this.loadingTranslations;
    } else {
      this.emitLang();
    }
    return result;
  }

  private checkAllLoaded(key: string): void {
    this.loadingChunk.delete(key);
    if (!this.loadingChunk.size) {
      this.loadingTranslations = null;
      this.loadingSubscriber.next(undefined);
      this.loadingSubscriber.complete();
      this.loadingSubscriber = null;
    }
  }

  private initChangeLang(): void {
    if (!this.loadingTranslations) {
      this.loadingTranslations = new Observable<void>((obs) => {
        this.loadingSubscriber = obs;
      }).pipe(share(), take(1));

      this.loadingTranslations.subscribe((_) => this.emitLang());
    }
  }

  private emitLang(): void {
    this._lang = this.nextLang;
    this.onLang.next(this._lang);
  }

  private loadingChunkKey(chunkId: string, lang: string): string {
    return `${chunkId}-${lang}`;
  }

  /**
   * Returns the parsed result of the translations
   */
  private getParsedResult(translations: ITranslateStore, key: string, interpolateParams?: Object): string {
    let res: string = key;
    if (translations) {
      res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
    }
    return res;
  }
}
