// import {Component, ViewChild} from '@angular/core';
// import {ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
// import { PrizmDay, PrizmMonth, PrizmMonthRange, PrizmRangeState, PrizmYear } from '../../../@core';
// import { PrizmInteractiveState } from '../../../directives/wrapper';
// import { PrizmCalendarMonthComponent } from '../calendar-month.component';
// import { PrizmCalendarMonthModule } from '../calendar-month.module';
//
// const TODAY = PrizmDay.currentLocal();
// export function configureTestSuite(configureAction: () => Promise<any>): void {
//   const testBedApi = getTestBed()
//   const originReset = TestBed.resetTestingModule
//   beforeAll(() => {
//     TestBed.resetTestingModule()
//     TestBed.resetTestingModule = () => TestBed
//   })
//   if (configureAction) {
//     beforeAll((done) => {
//       configureAction().then(done).catch(done.fail)
//     })
//   }
//   afterEach(() => {
//     testBedApi["_activeFixtures"].forEach((fixture) => fixture.destroy())
//     testBedApi["_instantiated"] = false
//   })
//   afterAll(() => {
//     TestBed.resetTestingModule = originReset
//     TestBed.resetTestingModule()
//   })
// }
//
// describe(`CalendarMonth`, () => {
//     @Component({
//         template: `
//             <prizm-calendar-month
//                 [value]="value"
//                 [disabledItemHandler]="disabledItemHandler"
//                 [min]="min"
//                 [max]="max"
//                 [(year)]="year"
//             ></prizm-calendar-month>
//         `,
//     })
//     class TestComponent {
//         @ViewChild(PrizmCalendarMonthComponent, {static: true})
//         component!: PrizmCalendarMonthComponent;
//
//         year = new PrizmYear(TODAY.year);
//
//         min = TODAY.append({year: -2});
//         max = TODAY.append({year: 2});
//         value = TODAY;
//         month = PrizmMonth.currentLocal();
//         disabledItemHandler = (item: PrizmMonth): boolean => item.month === 10;
//     }
//
//     let fixture: ComponentFixture<TestComponent>;
//     let testComponent: TestComponent;
//     let component: PrizmCalendarMonthComponent;
//
//     configureTestSuite(() => {
//         TestBed.configureTestingModule({
//             imports: [PrizmCalendarMonthModule],
//             declarations: [TestComponent],
//         });
//     });
//
//     beforeEach(() => {
//         fixture = TestBed.createComponent(TestComponent);
//         testComponent = fixture.componentInstance;
//         component = testComponent.component;
//         fixture.detectChanges();
//     });
//
//     describe(`isSingle`, () => {
//         it(`returns true if there is a value and it is a month`, () => {
//             component.value = TODAY;
//
//             expect(component.isSingle).toBe(true);
//         });
//
//         it(`returns true if there is a value and it is a single month range`, () => {
//             component.value = new PrizmMonthRange(TODAY, TODAY);
//
//             expect(component.isSingle).toBe(true);
//         });
//
//         it(`returns false if there is no value`, () => {
//             component.value = null;
//
//             expect(component.isSingle).toBe(false);
//         });
//     });
//
//     describe(`getItemState`, () => {
//         it(`returns disabled if there is`, () => {
//             const disabledMonth = new PrizmMonth(TODAY.year, 10);
//
//             expect(component.getItemState(disabledMonth)).toBe(
//                 PrizmInteractiveState.Disabled,
//             );
//         });
//
//         it(`returns null if there is no state`, () => {
//             const ordinaryItem = new PrizmMonth(TODAY.year, 3);
//
//             expect(component.getItemState(ordinaryItem)).toBe(null);
//         });
//     });
//
//     describe(`isItemInsideRange`, () => {
//         it(`returns false if no value`, () => {
//             component.value = null;
//
//             const candidate = new PrizmMonth(TODAY.year, 5);
//
//             expect(component.isItemInsideRange(candidate)).toBe(false);
//         });
//
//         it(`returns false if value is month`, () => {
//             const candidate = new PrizmMonth(TODAY.year, 5);
//
//             component.value = candidate;
//
//             expect(component.isItemInsideRange(candidate)).toBe(false);
//         });
//
//         it(`returns false if it is not hovered item inside singe month range`, () => {
//             const candidate = new PrizmMonth(TODAY.year, 5);
//
//             component.value = new PrizmMonthRange(
//                 new PrizmMonth(TODAY.year, 5),
//                 new PrizmMonth(TODAY.year, 5),
//             );
//
//             expect(component.isItemInsideRange(candidate)).toBe(false);
//         });
//
//         it(`returns true if it is hovered item inside singe month range`, () => {
//             const candidate = new PrizmMonth(TODAY.year, 5);
//
//             component.hoveredItem = candidate;
//             component.value = new PrizmMonthRange(
//                 new PrizmMonth(TODAY.year, 5),
//                 new PrizmMonth(TODAY.year, 5),
//             );
//
//             expect(component.isItemInsideRange(candidate)).toBe(false);
//         });
//
//         it(`returns true if value inside a month range`, () => {
//             const candidate = new PrizmMonth(TODAY.year, 5);
//
//             component.value = new PrizmMonthRange(
//                 new PrizmMonth(TODAY.year, 2),
//                 new PrizmMonth(TODAY.year, 7),
//             );
//
//             expect(component.isItemInsideRange(candidate)).toBe(true);
//         });
//     });
//
//     describe(`getItemRange`, () => {
//         it(`returns null if no value`, () => {
//             const month = new PrizmMonth(TODAY.year, 7);
//
//             component.value = null;
//
//             expect(component.getItemRange(month)).toBe(null);
//         });
//
//         it(`returns single if value is single month choice`, () => {
//             const month = new PrizmMonth(TODAY.year, 7);
//
//             component.value = month;
//
//             expect(component.getItemRange(month)).toBe(PrizmRangeState.Single);
//         });
//
//         it(`returns start if item is start of range`, () => {
//             const month = new PrizmMonth(TODAY.year, 7);
//
//             component.value = new PrizmMonthRange(month, month.append({month: 2}));
//
//             expect(component.getItemRange(month)).toBe(PrizmRangeState.Start);
//         });
//
//         it(`returns end if item is start of range`, () => {
//             const month = new PrizmMonth(TODAY.year, 7);
//
//             component.value = new PrizmMonthRange(month.append({month: -2}), month);
//
//             expect(component.getItemRange(month)).toBe(PrizmRangeState.End);
//         });
//
//         it(`returns end if hovered item before item`, () => {
//             const month = new PrizmMonth(TODAY.year, 7);
//
//             component.value = new PrizmMonthRange(month, month);
//             component.hoveredItem = new PrizmMonth(TODAY.year, 4);
//
//             expect(component.getItemRange(month)).toBe(PrizmRangeState.End);
//         });
//     });
//
//     describe(`year change`, () => {
//         it(`append year on next`, () => {
//             const year = new PrizmYear(TODAY.year);
//
//             component.year = year;
//
//             component.onNextYear();
//
//             expect(component.year.year).toBe(year.year + 1);
//             expect(testComponent.year.year).toBe(year.year + 1);
//         });
//
//         it(`append year on next`, () => {
//             const year = new PrizmYear(TODAY.year);
//
//             component.year = year;
//
//             component.onPreviousYear();
//
//             expect(component.year.year).toBe(year.year - 1);
//             expect(testComponent.year.year).toBe(year.year - 1);
//         });
//     });
// });
