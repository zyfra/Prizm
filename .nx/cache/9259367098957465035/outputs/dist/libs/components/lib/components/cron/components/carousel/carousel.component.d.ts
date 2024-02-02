import { EventEmitter } from '@angular/core';
import { PolymorphContent } from '../../../../directives/polymorph';
import { PrizmCarouselContent } from '../../../input/carousel';
import * as i0 from "@angular/core";
export declare class PrizmCronCarouselComponent {
    content: PrizmCarouselContent;
    value: string;
    template: PolymorphContent<{
        content: number;
    }>;
    valueChange: EventEmitter<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronCarouselComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmCronCarouselComponent, "prizm-cron-carousel", never, { "content": { "alias": "content"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, ["template"], never, false, never>;
}
