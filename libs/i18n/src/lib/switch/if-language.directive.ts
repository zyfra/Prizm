import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { PrizmLanguageName, PrizmLanguageSwitcher } from '@prizm-ui/i18n';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { BehaviorSubject, combineLatest, Subject, takeUntil, tap } from 'rxjs';
import { prizmObservable } from '@prizm-ui/core';

@Directive({
  selector: 'ng-template[prizmIfLang]',
  providers: [PrizmDestroyService],
  standalone: true,
})
export class PrizmIfLanguageDirective implements OnInit {
  @Input()
  @prizmObservable()
  prizmIfLang!: PrizmLanguageName;

  @Input()
  @prizmObservable()
  prizmIfLangElse?: TemplateRef<unknown>;

  @Input()
  @prizmObservable()
  prizmIfLangDefault!: PrizmLanguageName;

  prizmIfLang$$ = new BehaviorSubject<PrizmLanguageName | null>(null);
  prizmIfLangDefault$$ = new BehaviorSubject<PrizmLanguageName>('russian');
  prizmIfLangElse$$ = new BehaviorSubject<TemplateRef<unknown> | null>(null);

  private inited?: boolean;
  constructor(
    private readonly templateRef: TemplateRef<unknown>,
    private readonly viewContainerRef: ViewContainerRef,
    private readonly destroy$: PrizmDestroyService,
    private readonly languageSwitcher: PrizmLanguageSwitcher
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.languageSwitcher.language$,
      this.prizmIfLang$$,
      this.prizmIfLangDefault$$,
      this.prizmIfLangElse$$,
    ])
      .pipe(
        tap(([currentLanguage, chosenLanguage, defaultLanguage, elseTemplate]) => {
          chosenLanguage = chosenLanguage ?? defaultLanguage;
          if (currentLanguage !== chosenLanguage) {
            if (this.inited === false) return;
            this.inited = false;
            this.viewContainerRef.clear();

            if (elseTemplate) this.viewContainerRef.createEmbeddedView(elseTemplate);
          } else {
            if (this.inited === true) return;
            this.inited = true;
            this.viewContainerRef.clear();
            this.viewContainerRef.createEmbeddedView(this.templateRef);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
