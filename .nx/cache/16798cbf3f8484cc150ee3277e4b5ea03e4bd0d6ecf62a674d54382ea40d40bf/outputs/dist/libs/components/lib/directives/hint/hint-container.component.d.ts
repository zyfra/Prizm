import { AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmHoveredService } from '../../services';
import { PrizmHintService } from './hint.service';
import { PrizmOverlayControl } from '../../modules/overlay';
import { PolymorphContent } from '../polymorph/types/content';
import { PrizmTheme, PrizmThemeInvertedDirective, PrizmThemeInvertedValuesService } from '@prizm-ui/theme';
import * as i0 from "@angular/core";
export declare class PrizmHintContainerComponent<CONTEXT extends Record<string, unknown> = Record<string, unknown>> implements OnInit, AfterViewInit {
    protected readonly destroy$: PrizmDestroyService;
    protected readonly el: ElementRef;
    protected readonly renderer2: Renderer2;
    protected readonly prizmOverlayControl: PrizmOverlayControl;
    readonly themeInvertedValuesService: PrizmThemeInvertedValuesService;
    private readonly hintService;
    private readonly hoveredService;
    id: string;
    content: () => PolymorphContent;
    context: CONTEXT;
    set hintTheme(theme: PrizmTheme);
    readonly themeInvertedDirective: PrizmThemeInvertedDirective;
    constructor(destroy$: PrizmDestroyService, el: ElementRef, renderer2: Renderer2, prizmOverlayControl: PrizmOverlayControl, themeInvertedValuesService: PrizmThemeInvertedValuesService, hintService: PrizmHintService, hoveredService: PrizmHoveredService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    private initPositionListener;
    private initHoverListener;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmHintContainerComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmHintContainerComponent<any>, "prizm-hint-container", never, { "id": "id"; "content": "content"; "context": "context"; "hintTheme": "hintTheme"; }, {}, never, never, true, never>;
}
