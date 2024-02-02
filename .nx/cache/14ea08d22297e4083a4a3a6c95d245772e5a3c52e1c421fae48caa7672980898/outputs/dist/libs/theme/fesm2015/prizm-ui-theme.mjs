import * as i0 from '@angular/core';
import { Injectable, Inject, EventEmitter, ElementRef, Directive, Self, Optional, SkipSelf, Output, Input, InjectionToken, inject, NgModule } from '@angular/core';
import { BehaviorSubject, Subscription, ReplaySubject, of, combineLatest } from 'rxjs';
import { tap, map, distinctUntilChanged, takeUntil, switchMap } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { __decorate, __metadata } from 'tslib';
import * as i3 from '@prizm-ui/helpers';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { prizmObservable } from '@prizm-ui/core';

class PrizmThemeService {
    set rootElement(el) {
        this.rootElement_ = el;
    }
    get rootElement() {
        var _a;
        return (_a = this.rootElement_) !== null && _a !== void 0 ? _a : this.document.querySelector('body');
    }
    get value() {
        return this.changeSource$.value.theme;
    }
    constructor(document) {
        this.document = document;
        this.themeStorage = new Map();
        this.changeSource$ = new BehaviorSubject({
            theme: 'light',
        });
        this.change$ = this.changeSource$.pipe(tap(data => data.el && this.themeStorage.set(data.el, data.theme)));
        this.changesTheme$ = this.change$.pipe(map(i => i.theme));
        this.attThemeKey = 'data-prizm-theme';
        this.subscription = new Subscription();
        this.subscription.add(this.change$.pipe(tap(theme => this.setToHtml(theme.theme, theme.el))).subscribe());
    }
    getLastThemeForElement(el = this.rootElement) {
        var _a;
        let theme = this.themeStorage.get(el);
        if (el !== this.rootElement_)
            theme = (_a = el.closest(`[${this.attThemeKey}]`)) === null || _a === void 0 ? void 0 : _a.getAttribute(this.attThemeKey);
        return theme !== null && theme !== void 0 ? theme : null;
    }
    getLastThemeForElement$(el = this.rootElement) {
        return this.change$.pipe(map(() => this.getLastThemeForElement(el)), distinctUntilChanged());
    }
    getInvertedThemeByElement$(element = this.rootElement, pairThemeValues = {
        light: 'dark',
        dark: 'light',
    }) {
        return this.getLastThemeForElement$(element).pipe(map(theme => theme && pairThemeValues[theme]));
    }
    getByElement(el) {
        var _a;
        return (_a = (el !== null && el !== void 0 ? el : this.rootElement)) === null || _a === void 0 ? void 0 : _a.getAttribute(this.attThemeKey);
    }
    setToHtml(theme, el) {
        var _a;
        (_a = (el !== null && el !== void 0 ? el : this.rootElement)) === null || _a === void 0 ? void 0 : _a.setAttribute(this.attThemeKey, theme);
    }
    update(theme, el = this.rootElement) {
        this.changeSource$.next({
            theme,
            el,
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PrizmThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeService, deps: [{ token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable });
PrizmThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () {
        return [{ type: Document, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }];
    } });

class PrizmLocalThemeService {
    constructor() {
        this.theme$$ = new BehaviorSubject(null);
        this.theme$ = this.theme$$.asObservable();
    }
    setTheme(theme) {
        this.theme$$.next(theme);
    }
}
PrizmLocalThemeService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLocalThemeService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PrizmLocalThemeService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLocalThemeService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLocalThemeService, decorators: [{
            type: Injectable
        }] });

class PrizmThemeDirective {
    constructor(element, themeService, localThemeService, parentLocalThemeService, destroy$, renderer2) {
        this.element = element;
        this.themeService = themeService;
        this.localThemeService = localThemeService;
        this.parentLocalThemeService = parentLocalThemeService;
        this.destroy$ = destroy$;
        this.renderer2 = renderer2;
        this.prizmThemeChange = new EventEmitter();
        this.theme$$ = new ReplaySubject(1);
    }
    ngOnInit() {
        var _a, _b;
        const themeArr = [
            this.theme$$,
            (_b = (_a = this.parentLocalThemeService) === null || _a === void 0 ? void 0 : _a.theme$) !== null && _b !== void 0 ? _b : of(null),
            this.themeService.getLastThemeForElement$(this.themeService.rootElement),
        ];
        combineLatest(themeArr)
            .pipe(map(([theme, localTheme, themeFromService]) => theme || localTheme || themeFromService), distinctUntilChanged(), tap(theme => {
            this.localThemeService.setTheme(theme);
            this.renderer2.setAttribute(this.element.nativeElement, this.themeService.attThemeKey, theme);
        }), tap(theme => this.prizmThemeChange.next((this.prizmTheme = theme))), takeUntil(this.destroy$))
            .subscribe();
    }
}
PrizmThemeDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeDirective, deps: [{ token: ElementRef }, { token: PrizmThemeService }, { token: PrizmLocalThemeService, self: true }, { token: PrizmLocalThemeService, optional: true, skipSelf: true }, { token: i3.PrizmDestroyService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
PrizmThemeDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmThemeDirective, selector: "[prizmTheme]", inputs: { prizmTheme: "prizmTheme" }, outputs: { prizmThemeChange: "prizmThemeChange" }, providers: [PrizmDestroyService, PrizmLocalThemeService], ngImport: i0 });
__decorate([
    prizmObservable({
        name: 'theme$$',
    }),
    __metadata("design:type", String)
], PrizmThemeDirective.prototype, "prizmTheme", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmTheme]',
                    providers: [PrizmDestroyService, PrizmLocalThemeService],
                }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef, decorators: [{
                        type: Inject,
                        args: [ElementRef]
                    }] }, { type: PrizmThemeService }, { type: PrizmLocalThemeService, decorators: [{
                        type: Self
                    }] }, { type: PrizmLocalThemeService, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }, { type: i3.PrizmDestroyService }, { type: i0.Renderer2 }];
    }, propDecorators: { prizmThemeChange: [{
                type: Output
            }], prizmTheme: [{
                type: Input
            }] } });

const PRIZM_CONST_DEFAULT_INVERTED_VALUES = {
    dark: 'light',
    light: 'dark',
};
const PRIZM_THEME_INVERTED_VALUES = new InjectionToken(`Prizm Theme inverted values`, {
    factory: () => PRIZM_CONST_DEFAULT_INVERTED_VALUES,
});

class PrizmThemeInvertedValuesService {
    constructor(customInvertedValues) {
        this.invertedValues = customInvertedValues !== null && customInvertedValues !== void 0 ? customInvertedValues : PRIZM_CONST_DEFAULT_INVERTED_VALUES;
        this.value$$ = new BehaviorSubject(this.invertedValues);
    }
}
PrizmThemeInvertedValuesService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeInvertedValuesService, deps: [{ token: 'PRIZM_THEME_INVERTED_VALUES', optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
PrizmThemeInvertedValuesService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeInvertedValuesService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeInvertedValuesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: ['PRIZM_THEME_INVERTED_VALUES']
                    }, {
                        type: Optional
                    }] }];
    } });

class PrizmThemeInvertedDirective {
    constructor() {
        this.themeService = inject(PrizmThemeService);
        this.elementRef = inject(ElementRef);
        this.destroy$ = inject(PrizmDestroyService);
        this.themeInvertedValuesService = inject(PrizmThemeInvertedValuesService);
        this.prizmThemeChange = new EventEmitter();
        this.themeElement = this.themeService.rootElement;
    }
    ngOnInit() {
        combineLatest([this.themeInvertedValuesService.value$$, this.themeElement$$])
            .pipe(switchMap(([invertedValues, themeElement]) => (invertedValues === null || invertedValues === void 0 ? void 0 : invertedValues['*'])
            ? of(invertedValues === null || invertedValues === void 0 ? void 0 : invertedValues['*'])
            : this.themeService.getInvertedThemeByElement$(themeElement, invertedValues)), tap(newTheme => newTheme && this.themeService.update(newTheme, this.elementRef.nativeElement)), tap(newTheme => newTheme && this.prizmThemeChange.next(newTheme)), takeUntil(this.destroy$))
            .subscribe();
    }
}
PrizmThemeInvertedDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeInvertedDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PrizmThemeInvertedDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmThemeInvertedDirective, selector: "[prizmThemeInverted]", inputs: { themeElement: "themeElement" }, outputs: { prizmThemeChange: "prizmThemeChange" }, providers: [PrizmDestroyService], ngImport: i0 });
__decorate([
    prizmObservable({
        name: 'themeElement$$',
        subject: () => new ReplaySubject(1),
    }),
    __metadata("design:type", Object)
], PrizmThemeInvertedDirective.prototype, "themeElement", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeInvertedDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmThemeInverted]',
                    providers: [PrizmDestroyService],
                }]
        }], propDecorators: { prizmThemeChange: [{
                type: Output
            }], themeElement: [{
                type: Input
            }] } });

class PrizmThemeInvertedValuesDirective {
    constructor(themeInvertedValuesService) {
        this.themeInvertedValuesService = themeInvertedValuesService;
    }
    ngOnChanges() {
        this.themeInvertedValuesService.value$$.next(this.prizmThemeInvertedValues);
    }
}
PrizmThemeInvertedValuesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeInvertedValuesDirective, deps: [{ token: PrizmThemeInvertedValuesService, self: true }], target: i0.ɵɵFactoryTarget.Directive });
PrizmThemeInvertedValuesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: PrizmThemeInvertedValuesDirective, selector: "[prizmThemeInvertedValues]", inputs: { prizmThemeInvertedValues: "prizmThemeInvertedValues" }, providers: [PrizmThemeInvertedValuesService], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeInvertedValuesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[prizmThemeInvertedValues]',
                    providers: [PrizmThemeInvertedValuesService],
                }]
        }], ctorParameters: function () {
        return [{ type: PrizmThemeInvertedValuesService, decorators: [{
                        type: Self
                    }] }];
    }, propDecorators: { prizmThemeInvertedValues: [{
                type: Input
            }] } });

class PrizmThemeModule {
}
PrizmThemeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PrizmThemeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeModule, declarations: [PrizmThemeDirective, PrizmThemeInvertedDirective, PrizmThemeInvertedValuesDirective], exports: [PrizmThemeDirective, PrizmThemeInvertedDirective, PrizmThemeInvertedValuesDirective] });
PrizmThemeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmThemeModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [PrizmThemeDirective, PrizmThemeInvertedDirective, PrizmThemeInvertedValuesDirective],
                    exports: [PrizmThemeDirective, PrizmThemeInvertedDirective, PrizmThemeInvertedValuesDirective],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { PrizmLocalThemeService, PrizmThemeDirective, PrizmThemeInvertedDirective, PrizmThemeInvertedValuesDirective, PrizmThemeInvertedValuesService, PrizmThemeModule, PrizmThemeService };
//# sourceMappingURL=prizm-ui-theme.mjs.map
