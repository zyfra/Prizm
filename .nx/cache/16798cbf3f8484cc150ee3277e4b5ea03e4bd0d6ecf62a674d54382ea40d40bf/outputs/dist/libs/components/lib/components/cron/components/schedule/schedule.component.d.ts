import { EventEmitter } from '@angular/core';
import { PrizmCronUiListItem } from '../../model';
import { PolymorphContent } from '../../../../directives/polymorph';
import * as i0 from "@angular/core";
export declare class PrizmCronScheduleComponent {
    items: PrizmCronUiListItem[];
    selected: string[];
    selectedChange: EventEmitter<string[]>;
    template: PolymorphContent<{
        item: PrizmCronUiListItem;
        idx: number;
    }>;
    isSelected(item: PrizmCronUiListItem): boolean;
    select(item: PrizmCronUiListItem): void;
    emit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmCronScheduleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmCronScheduleComponent, "prizm-cron-schedule", never, { "items": "items"; "selected": "selected"; }, { "selectedChange": "selectedChange"; }, ["template"], never, false, never>;
}
