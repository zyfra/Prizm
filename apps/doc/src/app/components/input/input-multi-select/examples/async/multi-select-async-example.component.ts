import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectItemStringifyFunc,
  PrizmMultiSelectItemStringifyItem,
  PrizmPaginatorOutput,
} from '@prizm-ui/components';
import { PrizmDestroyService } from 'libs/helpers/src/lib/services/destroy';
import { BehaviorSubject, Observable, delay, of, takeUntil, tap } from 'rxjs';

export const locations = [
  {
    content: [
      {
        id: '6a14e006-83a3-46cd-b3fe-bc67718f76ee',
        name: 'Адлер',
      },
      {
        id: 'ea93af81-f078-4815-818b-efbf5682b8eb',
        name: 'Барнаул',
      },
      {
        id: '5b89b3d3-6ec1-496b-86b0-b3bd558bc651',
        name: 'Екатеринбург',
      },
      {
        id: 'd21d6a35-0913-4cda-b6b7-ab2f90209578',
        name: 'Иваново',
      },
      {
        id: '4f832f01-b30c-41a8-8e41-ade841879673',
        name: 'Калининград',
      },
      {
        id: '98287645-538d-4a21-8b8c-6782e64c29b8',
        name: 'Москва',
      },
      {
        id: 'b140c019-8774-441c-972d-db013d129388',
        name: 'Нижний Новгород',
      },
      {
        id: '524fc404-fe15-4989-b282-ae45b7e16182',
        name: 'Пермь',
      },
      {
        id: '89c0980b-5b73-4b15-8f47-a31ac506e670',
        name: 'Псков',
      },
      {
        id: '45c4cc5d-ad10-41be-8456-6a92a19e6408',
        name: 'Самара',
      },
    ],
    totalElements: 20,
  },
  {
    content: [
      {
        id: '6a14e006-83a3-46cd-b3fe-bc67718f77ee',
        name: 'Санкт-Петербург',
      },
      {
        id: 'ea93af81-f078-4815-818b-efbf5682b7eb',
        name: 'Сургут',
      },
      {
        id: '5b89b3d3-6ec1-496b-86b0-b3bd558bc751',
        name: 'Тверь',
      },
      {
        id: 'd21d6a35-0913-4cda-b6b7-ab2f90209778',
        name: 'Томск',
      },
      {
        id: '4f832f01-b30c-41a8-8e41-ade841879773',
        name: 'Тула',
      },
      {
        id: '98287645-538d-4a21-8b8c-6782e67c29b8',
        name: 'Ульяновск',
      },
      {
        id: 'b140c019-8774-441c-972d-db017d129388',
        name: 'Уфа',
      },
      {
        id: '524fc404-fe15-4989-b282-ae47b7e16182',
        name: 'Хабаровск',
      },
      {
        id: '89c0980b-5b73-4b15-8f47-a71ac506e670',
        name: 'Челябинск',
      },
      {
        id: '45c4cc5d-ad10-41be-8456-7a92a19e6408',
        name: 'Элиста ',
      },
    ],
    totalElements: 20,
  },
];

export type PaginatedResult<T> = {
  content: T[];
  totalElements: number;
};

export type City = {
  id: string;
  name: string;
};

@Component({
  selector: 'prizm-multi-select-async-example',
  templateUrl: './multi-select-async-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
  providers: [PrizmDestroyService],
})
export class PrizmInputMultiSelectAsyncExampleComponent implements OnInit {
  public isLoading = true;
  public pageNumber = 1;
  public pageSize = 10;
  public totalElements = 0;
  public control: FormControl<City[] | null> = new FormControl([], []);
  public controlList$ = new BehaviorSubject<City[] | undefined>(undefined);
  public readonly backendList$ = new BehaviorSubject<City[]>([]);

  public selectedList: City[] = [];

  constructor(private readonly destroy$: PrizmDestroyService) {}

  readonly identityMatcher: PrizmMultiSelectIdentityMatcher<City> = (a: City, b: City) => {
    return a?.id === b?.id;
  };
  readonly stringify: PrizmMultiSelectItemStringifyFunc<City> = (
    item: PrizmMultiSelectItemStringifyItem<City>
  ) => {
    return item.obj?.name;
  };

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(
        tap(value => {
          const currentPageSelectedList = this.backendList$.value?.filter(city =>
            value?.some(el => el.id === city.id)
          );

          if (currentPageSelectedList) {
            this.selectedList = [...this.selectedList, ...currentPageSelectedList];
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.getData().pipe(takeUntil(this.destroy$)).subscribe();
  }

  public changePage(event: PrizmPaginatorOutput): void {
    this.pageNumber = event.page;
    this.pageSize = event.rows;
    this.getData().pipe(takeUntil(this.destroy$)).subscribe();
  }

  private getData(): Observable<PaginatedResult<{ id: string; name: string }>> {
    this.isLoading = true;
    return of(locations[this.pageNumber - 1] as PaginatedResult<{ id: string; name: string }>).pipe(
      delay(1000),
      tap(res => {
        this.isLoading = false;
        this.totalElements = res.totalElements;

        const selectedNameList = this.selectedList.map(city => city.name);
        const currentPageBackendnameList = res.content.map(city => city.name);

        if (selectedNameList.every(name => currentPageBackendnameList.includes(name))) {
          this.controlList$.next(res.content);
        } else {
          this.controlList$.next(Array.from(new Set([...this.selectedList, ...res.content])));
        }
        this.backendList$.next(res.content);
      })
    );
  }
}
