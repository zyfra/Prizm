import { ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmThemeService } from '../../services/theme.service';
import { PrizmTheme } from '../../types/theme';
import { PrizmLocalThemeService } from './local-theme.service';
import * as i0 from "@angular/core";
export declare class PrizmThemeDirective implements OnInit {
    private readonly element;
    private readonly themeService;
    private readonly localThemeService;
    private readonly parentLocalThemeService;
    private readonly destroy$;
    private readonly renderer2;
    readonly prizmThemeChange: EventEmitter<string>;
    prizmTheme: PrizmTheme;
    private readonly theme$$;
    constructor(element: ElementRef<HTMLInputElement>, themeService: PrizmThemeService, localThemeService: PrizmLocalThemeService, parentLocalThemeService: PrizmLocalThemeService, destroy$: PrizmDestroyService, renderer2: Renderer2);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmThemeDirective, [null, null, { self: true; }, { optional: true; skipSelf: true; }, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmThemeDirective, "[prizmTheme]", never, { "prizmTheme": "prizmTheme"; }, { "prizmThemeChange": "prizmThemeChange"; }, never, never, false, never>;
}
