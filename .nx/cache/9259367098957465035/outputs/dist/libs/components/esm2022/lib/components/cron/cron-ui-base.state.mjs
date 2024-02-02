import { canShowCronListItem, getArrWithStringNumbers, getCarousel } from './util';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, first, map, takeUntil, tap } from 'rxjs/operators';
import { UntypedFormControl } from '@angular/forms';
import { PrizmCronUiBaseType } from './model';
export class PrizmCronUiBaseState {
    constructor(current$, initialType, TYPES, between = {
        value: {
            start: '0',
            end: '1',
        },
        list: {
            start: getCarousel(60, 0),
            end: getCarousel(60, 0),
        },
    }, specified = {
        value: ['0'],
        list: getArrWithStringNumbers(60, 1, false).map((i, idx) => ({
            key: idx.toString(),
            value: idx.toString(),
        })),
    }, everyChosenTimesAfterChosen = {
        list: {
            on: getCarousel(60, 1),
            after: getCarousel(60, 0),
        },
        value: {
            on: '1',
            after: '0',
        },
    }) {
        this.current$ = current$;
        this.initialType = initialType;
        this.TYPES = TYPES;
        this.between = between;
        this.specified = specified;
        this.everyChosenTimesAfterChosen = everyChosenTimesAfterChosen;
        this.list = {
            everyChosenTimesAfterChosen: this.everyChosenTimesAfterChosen.list,
            specified: this.specified.list,
            between: this.between.list,
        };
        this.defaultState = {
            type: this.initialType,
            everyChosenTimesAfterChosen: this.everyChosenTimesAfterChosen.value,
            specified: this.specified.value,
            between: this.between.value,
        };
        this.state$ = new BehaviorSubject(this.defaultState);
        this.canShowCronListItem = canShowCronListItem;
        this.typeControl = new UntypedFormControl();
        this.type$ = this.current$.pipe(map(i => this.getTypeByValue(i, this.cron.value)));
        this.initialType = initialType;
    }
    init() {
        this.initLocalStateChanger();
        this.initLocalTypeChanger();
    }
    initLocalStateChanger() {
        /* add change when base changes */
        this.current$
            .pipe(distinctUntilChanged(this.isBaseChanged), tap(value => this.updateLocalState(value, this.getTypeByValue(value, this.cron.value))), takeUntil(this.destroy$))
            .subscribe();
    }
    isBaseChanged(a, b) {
        return a === b;
    }
    initLocalTypeChanger() {
        this.type$
            .pipe(filter(i => i != this.typeControl.value), tap(type => {
            this.typeControl.setValue(type);
        }), takeUntil(this.destroy$))
            .subscribe();
    }
    getTypeByValueByDefault(value, cron) {
        if (value === '*') {
            return PrizmCronUiBaseType.every;
        }
        else if (value.includes('/')) {
            return PrizmCronUiBaseType.after;
        }
        else if (value.includes('-')) {
            return PrizmCronUiBaseType.between;
        }
        return PrizmCronUiBaseType.specified;
    }
    getTypeByValue(hour, cron) {
        return this.getTypeByValueByDefault(hour, cron);
    }
    updatePartial(state) {
        this.state$.next({
            ...this.state$.value,
            ...state,
        });
    }
    updateMainIfChanged(newState) {
        this.current$
            .pipe(first(), tap(old => {
            if (old !== newState) {
                this.updateMainState(newState);
            }
        }))
            .subscribe();
    }
    /**
     * update between
     * */
    updateBetween({ start, end, } = {}) {
        start = start ?? this.state$.value.between.start;
        end = end ?? this.state$.value.between.end;
        this.updateMainIfChanged(`${start}-${end}`);
    }
    /**
     * update on # after #
     * */
    updateOn(options = {}) {
        let { on, after } = options;
        on = on ?? this.state$.value.everyChosenTimesAfterChosen.on;
        after = after ?? this.state$.value.everyChosenTimesAfterChosen.after;
        this.updateMainIfChanged(`${after}/${on}`);
    }
    /**
     * update on
     * */
    updateSpecified(specified) {
        this.updateMainIfChanged(`${specified?.join(',') ?? 0}`);
    }
    /**
     * set every *
     * */
    setEvery() {
        this.updateMainIfChanged('*');
    }
    /**
     * TODO fix type casting
     * */
    updateLocalState(value, type) {
        switch (type) {
            case this.TYPES.between:
                {
                    const arr = value.split('-');
                    const start = arr[0] ?? '0';
                    const end = arr[1] ?? '0';
                    this.updatePartial({
                        type: PrizmCronUiBaseType.between,
                        between: {
                            start: start,
                            end: end,
                        },
                    });
                }
                break;
            case this.TYPES.every:
                this.updatePartial({
                    type: PrizmCronUiBaseType.every,
                });
                break;
            case this.TYPES.specified:
                this.updatePartial({
                    type: PrizmCronUiBaseType.specified,
                    specified: value.split(','),
                });
                break;
            case this.TYPES.after:
                {
                    const arr = value.split('/');
                    const on = arr[1] ?? '0';
                    const after = arr[0] ?? '0';
                    this.updatePartial({
                        type: PrizmCronUiBaseType.after,
                        everyChosenTimesAfterChosen: {
                            on: on,
                            after: after,
                        },
                    });
                }
                break;
        }
    }
    destroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi11aS1iYXNlLnN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9jb21wb25lbnRzL3NyYy9saWIvY29tcG9uZW50cy9jcm9uL2Nyb24tdWktYmFzZS5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBWSxLQUFLLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQTBDLE1BQU0sU0FBUyxDQUFDO0FBR3RGLE1BQU0sT0FBZ0Isb0JBQW9CO0lBeUJ4QyxZQUNrQixRQUF5QixFQUN6QixXQUFpQixFQUNqQixLQUFXLEVBQ1YsVUFBVTtRQUN6QixLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsR0FBRztZQUNWLEdBQUcsRUFBRSxHQUFHO1NBQ1Q7UUFDRCxJQUFJLEVBQUU7WUFDSixLQUFLLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDekIsR0FBRyxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3hCO0tBQ0YsRUFDZ0IsWUFBWTtRQUMzQixLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDWixJQUFJLEVBQUUsdUJBQXVCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNELEdBQUcsRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ25CLEtBQUssRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFO1NBQ3RCLENBQUMsQ0FBQztLQUNKLEVBQ2dCLDhCQUE4QjtRQUM3QyxJQUFJLEVBQUU7WUFDSixFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFLEdBQUc7WUFDUCxLQUFLLEVBQUUsR0FBRztTQUNYO0tBQ0Y7UUE3QmUsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQU07UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBU3ZCO1FBQ2dCLGNBQVMsR0FBVCxTQUFTLENBTXpCO1FBQ2dCLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FTM0M7UUFqRE0sU0FBSSxHQUFTO1lBQ3BCLDJCQUEyQixFQUFFLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJO1lBQ2xFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDOUIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTtTQUNuQixDQUFDO1FBRUQsaUJBQVksR0FBVTtZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUs7WUFDbkUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztZQUMvQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1NBQ25CLENBQUM7UUFFRixXQUFNLEdBQUcsSUFBSSxlQUFlLENBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBSXZELHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBcUNuQyxnQkFBVyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUV2QyxVQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFMNUYsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQU1NLElBQUk7UUFDVCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRVMscUJBQXFCO1FBQzdCLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsUUFBUTthQUNWLElBQUksQ0FDSCxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQ3hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ3ZGLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVTLGFBQWEsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVTLG9CQUFvQjtRQUM1QixJQUFJLENBQUMsS0FBSzthQUNQLElBQUksQ0FDSCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekI7YUFDQSxTQUFTLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBSU0sdUJBQXVCLENBQUMsS0FBYSxFQUFFLElBQTBCO1FBQ3RFLElBQUksS0FBSyxLQUFLLEdBQUcsRUFBRTtZQUNqQixPQUFPLG1CQUFtQixDQUFDLEtBQUssQ0FBQztTQUNsQzthQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixPQUFPLG1CQUFtQixDQUFDLEtBQUssQ0FBQztTQUNsQzthQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixPQUFPLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztTQUNwQztRQUVELE9BQU8sbUJBQW1CLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFDTSxjQUFjLENBQUMsSUFBWSxFQUFFLElBQTBCO1FBQzVELE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksRUFBRSxJQUFJLENBQW9CLENBQUM7SUFDckUsQ0FBQztJQUVNLGFBQWEsQ0FBQyxLQUFxQjtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ3BCLEdBQUcsS0FBSztTQUNULENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxRQUFnQjtRQUN6QyxJQUFJLENBQUMsUUFBUTthQUNWLElBQUksQ0FDSCxLQUFLLEVBQUUsRUFDUCxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDUixJQUFJLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDLENBQUMsQ0FDSDthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7U0FFSztJQUNFLGFBQWEsQ0FBQyxFQUNuQixLQUFLLEVBQ0wsR0FBRyxNQUlELEVBQUU7UUFDSixLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDakQsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzNDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEtBQUssSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7U0FFSztJQUNFLFFBQVEsQ0FDYixVQUdJLEVBQUU7UUFFTixJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM1QixFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLEVBQUUsQ0FBQztRQUM1RCxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQztRQUNyRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O1NBRUs7SUFDRSxlQUFlLENBQUMsU0FBb0I7UUFDekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7U0FFSztJQUNFLFFBQVE7UUFDYixJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOztTQUVLO0lBQ0UsZ0JBQWdCLENBQUMsS0FBVSxFQUFFLElBQVU7UUFDNUMsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztnQkFDckI7b0JBQ0UsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDN0IsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztvQkFDNUIsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQztvQkFFMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQzt3QkFDakIsSUFBSSxFQUFFLG1CQUFtQixDQUFDLE9BQU87d0JBQ2pDLE9BQU8sRUFBRTs0QkFDUCxLQUFLLEVBQUUsS0FBSzs0QkFDWixHQUFHLEVBQUUsR0FBRzt5QkFDVDtxQkFDMkIsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxNQUFNO1lBQ1IsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUM7b0JBQ2pCLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO2lCQUNILENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUN2QixJQUFJLENBQUMsYUFBYSxDQUFDO29CQUNqQixJQUFJLEVBQUUsbUJBQW1CLENBQUMsU0FBUztvQkFDbkMsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNDLENBQUMsQ0FBQztnQkFDaEMsTUFBTTtZQUVSLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2dCQUNuQjtvQkFDRSxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3QixNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO29CQUN6QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDO29CQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUNqQixJQUFJLEVBQUUsbUJBQW1CLENBQUMsS0FBSzt3QkFDL0IsMkJBQTJCLEVBQUU7NEJBQzNCLEVBQUUsRUFBRSxFQUFFOzRCQUNOLEtBQUssRUFBRSxLQUFLO3lCQUNiO3FCQUMyQixDQUFDLENBQUM7aUJBQ2pDO2dCQUNELE1BQU07U0FDVDtJQUNILENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FuU2hvd0Nyb25MaXN0SXRlbSwgZ2V0QXJyV2l0aFN0cmluZ051bWJlcnMsIGdldENhcm91c2VsIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIGZpbmFsaXplLCBmaXJzdCwgbWFwLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFByaXptQ3JvblVpQmFzZVR5cGUsIFByaXptQ3JvblVpU3RhdGUsIFByaXptQ3JvblVpU3RhdGVMaXN0IH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBQcml6bUNyb25TZXJ2aWNlLCBQcml6bUNyb25WYWx1ZU9iamVjdCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Nyb24nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUHJpem1Dcm9uVWlCYXNlU3RhdGU8XG4gIEVOVU0gZXh0ZW5kcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHR5cGVvZiBQcml6bUNyb25VaUJhc2VUeXBlLFxuICBUWVBFID0gUHJpem1Dcm9uVWlCYXNlVHlwZSxcbiAgU1RBVEUgZXh0ZW5kcyBQcml6bUNyb25VaVN0YXRlPFRZUEU+ID0gUHJpem1Dcm9uVWlTdGF0ZTxUWVBFPixcbiAgTElTVCBleHRlbmRzIFByaXptQ3JvblVpU3RhdGVMaXN0ID0gUHJpem1Dcm9uVWlTdGF0ZUxpc3Rcbj4ge1xuICByZWFkb25seSBsaXN0OiBMSVNUID0ge1xuICAgIGV2ZXJ5Q2hvc2VuVGltZXNBZnRlckNob3NlbjogdGhpcy5ldmVyeUNob3NlblRpbWVzQWZ0ZXJDaG9zZW4ubGlzdCxcbiAgICBzcGVjaWZpZWQ6IHRoaXMuc3BlY2lmaWVkLmxpc3QsXG4gICAgYmV0d2VlbjogdGhpcy5iZXR3ZWVuLmxpc3QsXG4gIH0gYXMgTElTVDtcblxuICByZWFkb25seSBkZWZhdWx0U3RhdGU6IFNUQVRFID0ge1xuICAgIHR5cGU6IHRoaXMuaW5pdGlhbFR5cGUsXG4gICAgZXZlcnlDaG9zZW5UaW1lc0FmdGVyQ2hvc2VuOiB0aGlzLmV2ZXJ5Q2hvc2VuVGltZXNBZnRlckNob3Nlbi52YWx1ZSxcbiAgICBzcGVjaWZpZWQ6IHRoaXMuc3BlY2lmaWVkLnZhbHVlLFxuICAgIGJldHdlZW46IHRoaXMuYmV0d2Vlbi52YWx1ZSxcbiAgfSBhcyBTVEFURTtcblxuICByZWFkb25seSBzdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFNUQVRFPih0aGlzLmRlZmF1bHRTdGF0ZSk7XG5cbiAgYWJzdHJhY3QgcmVhZG9ubHkgY3JvbjogUHJpem1Dcm9uU2VydmljZTtcbiAgYWJzdHJhY3QgcmVhZG9ubHkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2U7XG4gIHJlYWRvbmx5IGNhblNob3dDcm9uTGlzdEl0ZW0gPSBjYW5TaG93Q3Jvbkxpc3RJdGVtO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjdXJyZW50JDogT2JzZXJ2YWJsZTxhbnk+LFxuICAgIHB1YmxpYyByZWFkb25seSBpbml0aWFsVHlwZTogVFlQRSxcbiAgICBwdWJsaWMgcmVhZG9ubHkgVFlQRVM6IEVOVU0sXG4gICAgcHJpdmF0ZSByZWFkb25seSBiZXR3ZWVuID0ge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgc3RhcnQ6ICcwJyxcbiAgICAgICAgZW5kOiAnMScsXG4gICAgICB9LFxuICAgICAgbGlzdDoge1xuICAgICAgICBzdGFydDogZ2V0Q2Fyb3VzZWwoNjAsIDApLFxuICAgICAgICBlbmQ6IGdldENhcm91c2VsKDYwLCAwKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwZWNpZmllZCA9IHtcbiAgICAgIHZhbHVlOiBbJzAnXSxcbiAgICAgIGxpc3Q6IGdldEFycldpdGhTdHJpbmdOdW1iZXJzKDYwLCAxLCBmYWxzZSkubWFwKChpLCBpZHgpID0+ICh7XG4gICAgICAgIGtleTogaWR4LnRvU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBpZHgudG9TdHJpbmcoKSxcbiAgICAgIH0pKSxcbiAgICB9LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlcnlDaG9zZW5UaW1lc0FmdGVyQ2hvc2VuID0ge1xuICAgICAgbGlzdDoge1xuICAgICAgICBvbjogZ2V0Q2Fyb3VzZWwoNjAsIDEpLFxuICAgICAgICBhZnRlcjogZ2V0Q2Fyb3VzZWwoNjAsIDApLFxuICAgICAgfSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG9uOiAnMScsXG4gICAgICAgIGFmdGVyOiAnMCcsXG4gICAgICB9LFxuICAgIH1cbiAgKSB7XG4gICAgdGhpcy5pbml0aWFsVHlwZSA9IGluaXRpYWxUeXBlO1xuICB9XG5cbiAgcHVibGljIHJlYWRvbmx5IHR5cGVDb250cm9sID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgpO1xuXG4gIHB1YmxpYyByZWFkb25seSB0eXBlJCA9IHRoaXMuY3VycmVudCQucGlwZShtYXAoaSA9PiB0aGlzLmdldFR5cGVCeVZhbHVlKGksIHRoaXMuY3Jvbi52YWx1ZSkpKTtcblxuICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRMb2NhbFN0YXRlQ2hhbmdlcigpO1xuICAgIHRoaXMuaW5pdExvY2FsVHlwZUNoYW5nZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0TG9jYWxTdGF0ZUNoYW5nZXIoKTogdm9pZCB7XG4gICAgLyogYWRkIGNoYW5nZSB3aGVuIGJhc2UgY2hhbmdlcyAqL1xuICAgIHRoaXMuY3VycmVudCRcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCh0aGlzLmlzQmFzZUNoYW5nZWQpLFxuICAgICAgICB0YXAodmFsdWUgPT4gdGhpcy51cGRhdGVMb2NhbFN0YXRlKHZhbHVlLCB0aGlzLmdldFR5cGVCeVZhbHVlKHZhbHVlLCB0aGlzLmNyb24udmFsdWUpKSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQmFzZUNoYW5nZWQoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIHByb3RlY3RlZCBpbml0TG9jYWxUeXBlQ2hhbmdlcigpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGUkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKGkgPT4gaSAhPSB0aGlzLnR5cGVDb250cm9sLnZhbHVlKSxcbiAgICAgICAgdGFwKHR5cGUgPT4ge1xuICAgICAgICAgIHRoaXMudHlwZUNvbnRyb2wuc2V0VmFsdWUodHlwZSk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCB1cGRhdGVNYWluU3RhdGUodmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbiAgcHVibGljIGdldFR5cGVCeVZhbHVlQnlEZWZhdWx0KHZhbHVlOiBzdHJpbmcsIGNyb246IFByaXptQ3JvblZhbHVlT2JqZWN0KTogUHJpem1Dcm9uVWlCYXNlVHlwZSB7XG4gICAgaWYgKHZhbHVlID09PSAnKicpIHtcbiAgICAgIHJldHVybiBQcml6bUNyb25VaUJhc2VUeXBlLmV2ZXJ5O1xuICAgIH0gZWxzZSBpZiAodmFsdWUuaW5jbHVkZXMoJy8nKSkge1xuICAgICAgcmV0dXJuIFByaXptQ3JvblVpQmFzZVR5cGUuYWZ0ZXI7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcygnLScpKSB7XG4gICAgICByZXR1cm4gUHJpem1Dcm9uVWlCYXNlVHlwZS5iZXR3ZWVuO1xuICAgIH1cblxuICAgIHJldHVybiBQcml6bUNyb25VaUJhc2VUeXBlLnNwZWNpZmllZDtcbiAgfVxuICBwdWJsaWMgZ2V0VHlwZUJ5VmFsdWUoaG91cjogc3RyaW5nLCBjcm9uOiBQcml6bUNyb25WYWx1ZU9iamVjdCk6IFRZUEUge1xuICAgIHJldHVybiB0aGlzLmdldFR5cGVCeVZhbHVlQnlEZWZhdWx0KGhvdXIsIGNyb24pIGFzIHVua25vd24gYXMgVFlQRTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVQYXJ0aWFsKHN0YXRlOiBQYXJ0aWFsPFNUQVRFPik6IHZvaWQge1xuICAgIHRoaXMuc3RhdGUkLm5leHQoe1xuICAgICAgLi4udGhpcy5zdGF0ZSQudmFsdWUsXG4gICAgICAuLi5zdGF0ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVNYWluSWZDaGFuZ2VkKG5ld1N0YXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnQkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgdGFwKG9sZCA9PiB7XG4gICAgICAgICAgaWYgKG9sZCAhPT0gbmV3U3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTWFpblN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlIGJldHdlZW5cbiAgICogKi9cbiAgcHVibGljIHVwZGF0ZUJldHdlZW4oe1xuICAgIHN0YXJ0LFxuICAgIGVuZCxcbiAgfToge1xuICAgIHN0YXJ0Pzogc3RyaW5nO1xuICAgIGVuZD86IHN0cmluZztcbiAgfSA9IHt9KTogdm9pZCB7XG4gICAgc3RhcnQgPSBzdGFydCA/PyB0aGlzLnN0YXRlJC52YWx1ZS5iZXR3ZWVuLnN0YXJ0O1xuICAgIGVuZCA9IGVuZCA/PyB0aGlzLnN0YXRlJC52YWx1ZS5iZXR3ZWVuLmVuZDtcbiAgICB0aGlzLnVwZGF0ZU1haW5JZkNoYW5nZWQoYCR7c3RhcnR9LSR7ZW5kfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZSBvbiAjIGFmdGVyICNcbiAgICogKi9cbiAgcHVibGljIHVwZGF0ZU9uKFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIG9uPzogc3RyaW5nO1xuICAgICAgYWZ0ZXI/OiBzdHJpbmc7XG4gICAgfSA9IHt9XG4gICk6IHZvaWQge1xuICAgIGxldCB7IG9uLCBhZnRlciB9ID0gb3B0aW9ucztcbiAgICBvbiA9IG9uID8/IHRoaXMuc3RhdGUkLnZhbHVlLmV2ZXJ5Q2hvc2VuVGltZXNBZnRlckNob3Nlbi5vbjtcbiAgICBhZnRlciA9IGFmdGVyID8/IHRoaXMuc3RhdGUkLnZhbHVlLmV2ZXJ5Q2hvc2VuVGltZXNBZnRlckNob3Nlbi5hZnRlcjtcbiAgICB0aGlzLnVwZGF0ZU1haW5JZkNoYW5nZWQoYCR7YWZ0ZXJ9LyR7b259YCk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlIG9uXG4gICAqICovXG4gIHB1YmxpYyB1cGRhdGVTcGVjaWZpZWQoc3BlY2lmaWVkPzogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZU1haW5JZkNoYW5nZWQoYCR7c3BlY2lmaWVkPy5qb2luKCcsJykgPz8gMH1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXQgZXZlcnkgKlxuICAgKiAqL1xuICBwdWJsaWMgc2V0RXZlcnkoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVNYWluSWZDaGFuZ2VkKCcqJyk7XG4gIH1cblxuICAvKipcbiAgICogVE9ETyBmaXggdHlwZSBjYXN0aW5nXG4gICAqICovXG4gIHB1YmxpYyB1cGRhdGVMb2NhbFN0YXRlKHZhbHVlOiBhbnksIHR5cGU6IFRZUEUpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgdGhpcy5UWVBFUy5iZXR3ZWVuOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgYXJyID0gdmFsdWUuc3BsaXQoJy0nKTtcbiAgICAgICAgICBjb25zdCBzdGFydCA9IGFyclswXSA/PyAnMCc7XG4gICAgICAgICAgY29uc3QgZW5kID0gYXJyWzFdID8/ICcwJztcblxuICAgICAgICAgIHRoaXMudXBkYXRlUGFydGlhbCh7XG4gICAgICAgICAgICB0eXBlOiBQcml6bUNyb25VaUJhc2VUeXBlLmJldHdlZW4sXG4gICAgICAgICAgICBiZXR3ZWVuOiB7XG4gICAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgICAgICAgZW5kOiBlbmQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0gYXMgdW5rbm93biBhcyBQYXJ0aWFsPFNUQVRFPik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuVFlQRVMuZXZlcnk6XG4gICAgICAgIHRoaXMudXBkYXRlUGFydGlhbCh7XG4gICAgICAgICAgdHlwZTogUHJpem1Dcm9uVWlCYXNlVHlwZS5ldmVyeSxcbiAgICAgICAgfSBhcyB1bmtub3duIGFzIFBhcnRpYWw8U1RBVEU+KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHRoaXMuVFlQRVMuc3BlY2lmaWVkOlxuICAgICAgICB0aGlzLnVwZGF0ZVBhcnRpYWwoe1xuICAgICAgICAgIHR5cGU6IFByaXptQ3JvblVpQmFzZVR5cGUuc3BlY2lmaWVkLFxuICAgICAgICAgIHNwZWNpZmllZDogdmFsdWUuc3BsaXQoJywnKSxcbiAgICAgICAgfSBhcyB1bmtub3duIGFzIFBhcnRpYWw8U1RBVEU+KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgdGhpcy5UWVBFUy5hZnRlcjpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGFyciA9IHZhbHVlLnNwbGl0KCcvJyk7XG4gICAgICAgICAgY29uc3Qgb24gPSBhcnJbMV0gPz8gJzAnO1xuICAgICAgICAgIGNvbnN0IGFmdGVyID0gYXJyWzBdID8/ICcwJztcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhcnRpYWwoe1xuICAgICAgICAgICAgdHlwZTogUHJpem1Dcm9uVWlCYXNlVHlwZS5hZnRlcixcbiAgICAgICAgICAgIGV2ZXJ5Q2hvc2VuVGltZXNBZnRlckNob3Nlbjoge1xuICAgICAgICAgICAgICBvbjogb24sXG4gICAgICAgICAgICAgIGFmdGVyOiBhZnRlcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSBhcyB1bmtub3duIGFzIFBhcnRpYWw8U1RBVEU+KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=