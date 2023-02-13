// import {Directive, DoCheck, Inject, Self} from '@angular/core';
// import {
//     AbstractPrizmControl,
//     PrizmDestroyService,
//     PrizmHandler,
//     PrizmMonth,
//     PrizmMonthRange,
// } from '@prizm-ui/cdk';
// import {AbstractPrizmTextfieldHost, prizmAsTextfieldHost} from '@prizm-ui/core';
// import {PRIZM_MONTH_FORMATTER} from '@prizm-ui/kit/tokens';
// import {combineLatest, Observable, Subject} from 'rxjs';
// import {distinctUntilChanged, switchMap, takeUntil} from 'rxjs/operators';
//
// import {PrizmInputMonthRangeComponent} from './input-month-range.component';
//
// @Directive({
//     selector: `prizm-input-month-range`,
//     providers: [prizmAsTextfieldHost(PrizmInputMonthRangeDirective), PrizmDestroyService],
// })
// export class PrizmInputMonthRangeDirective
//     extends AbstractPrizmTextfieldHost<PrizmInputMonthRangeComponent>
//     implements DoCheck
// {
//     private readonly value$ = new Subject<PrizmMonthRange | null>();
//
//     private localizedValue: [string, string] = [``, ``];
//
//     constructor(
//         @Inject(AbstractPrizmControl) host: PrizmInputMonthRangeComponent,
//         @Inject(PRIZM_MONTH_FORMATTER)
//         formatter: PrizmHandler<PrizmMonth | null, Observable<string>>,
//         @Self() @Inject(PrizmDestroyService) destroy$: Observable<unknown>,
//     ) {
//         super(host);
//
//         this.value$
//             .pipe(
//                 distinctUntilChanged(),
//                 switchMap((value: PrizmMonthRange | null) =>
//                     combineLatest([
//                         formatter(value?.from || null),
//                         formatter(value?.to || null),
//                     ]),
//                 ),
//                 takeUntil(destroy$),
//             )
//             .subscribe(localizedValue => {
//                 this.localizedValue = localizedValue;
//             });
//     }
//
//     override get readOnly(): boolean {
//         return true;
//     }
//
//     override get value(): string {
//         return this.localizedValue[0]
//             ? this.host.computeValue(...this.localizedValue)
//             : ``;
//     }
//
//     ngDoCheck(): void {
//         this.value$.next(this.host.value);
//     }
//
//     onValueChange(value: string): void {
//         this.host.onValueChange(value);
//     }
// }
