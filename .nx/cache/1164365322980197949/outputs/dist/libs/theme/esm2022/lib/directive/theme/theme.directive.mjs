import { __decorate, __metadata } from 'tslib';
import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
  Renderer2,
  Self,
  SkipSelf,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';
import { PrizmThemeService } from '../../services/theme.service';
import { prizmObservable } from '@prizm-ui/core';
import { combineLatest, of, ReplaySubject } from 'rxjs';
import { PrizmLocalThemeService } from './local-theme.service';
import * as i0 from '@angular/core';
import * as i1 from '../../services/theme.service';
import * as i2 from './local-theme.service';
import * as i3 from '@prizm-ui/helpers';
export class PrizmThemeDirective {
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
    const themeArr = [
      this.theme$$,
      this.parentLocalThemeService?.theme$ ?? of(null),
      this.themeService.getLastThemeForElement$(this.themeService.rootElement),
    ];
    combineLatest(themeArr)
      .pipe(
        map(([theme, localTheme, themeFromService]) => theme || localTheme || themeFromService),
        distinctUntilChanged(),
        tap(theme => {
          this.localThemeService.setTheme(theme);
          this.renderer2.setAttribute(this.element.nativeElement, this.themeService.attThemeKey, theme);
        }),
        tap(theme => this.prizmThemeChange.next((this.prizmTheme = theme))),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
  static {
    this.ɵfac = i0.ɵɵngDeclareFactory({
      minVersion: '12.0.0',
      version: '16.1.8',
      ngImport: i0,
      type: PrizmThemeDirective,
      deps: [
        { token: ElementRef },
        { token: i1.PrizmThemeService },
        { token: i2.PrizmLocalThemeService, self: true },
        { token: i2.PrizmLocalThemeService, optional: true, skipSelf: true },
        { token: i3.PrizmDestroyService },
        { token: i0.Renderer2 },
      ],
      target: i0.ɵɵFactoryTarget.Directive,
    });
  }
  static {
    this.ɵdir = i0.ɵɵngDeclareDirective({
      minVersion: '14.0.0',
      version: '16.1.8',
      type: PrizmThemeDirective,
      selector: '[prizmTheme]',
      inputs: { prizmTheme: 'prizmTheme' },
      outputs: { prizmThemeChange: 'prizmThemeChange' },
      providers: [PrizmDestroyService, PrizmLocalThemeService],
      ngImport: i0,
    });
  }
}
__decorate(
  [
    prizmObservable({
      name: 'theme$$',
    }),
    __metadata('design:type', String),
  ],
  PrizmThemeDirective.prototype,
  'prizmTheme',
  void 0
);
i0.ɵɵngDeclareClassMetadata({
  minVersion: '12.0.0',
  version: '16.1.8',
  ngImport: i0,
  type: PrizmThemeDirective,
  decorators: [
    {
      type: Directive,
      args: [
        {
          selector: '[prizmTheme]',
          providers: [PrizmDestroyService, PrizmLocalThemeService],
        },
      ],
    },
  ],
  ctorParameters: function () {
    return [
      {
        type: i0.ElementRef,
        decorators: [
          {
            type: Inject,
            args: [ElementRef],
          },
        ],
      },
      { type: i1.PrizmThemeService },
      {
        type: i2.PrizmLocalThemeService,
        decorators: [
          {
            type: Self,
          },
        ],
      },
      {
        type: i2.PrizmLocalThemeService,
        decorators: [
          {
            type: Optional,
          },
          {
            type: SkipSelf,
          },
        ],
      },
      { type: i3.PrizmDestroyService },
      { type: i0.Renderer2 },
    ];
  },
  propDecorators: {
    prizmThemeChange: [
      {
        type: Output,
      },
    ],
    prizmTheme: [
      {
        type: Input,
      },
    ],
  },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy90aGVtZS9zcmMvbGliL2RpcmVjdGl2ZS90aGVtZS90aGVtZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUVMLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULElBQUksRUFDSixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFNL0QsTUFBTSxPQUFPLG1CQUFtQjtJQVk5QixZQUVtQixPQUFxQyxFQUNyQyxZQUErQixFQUN2QixpQkFBeUMsRUFDekIsdUJBQStDLEVBQ3ZFLFFBQTZCLEVBQzdCLFNBQW9CO1FBTHBCLFlBQU8sR0FBUCxPQUFPLENBQThCO1FBQ3JDLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdCO1FBQ3pCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBd0I7UUFDdkUsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7UUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWpCdkIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQVFqRCxZQUFPLEdBQThCLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBVXhFLENBQUM7SUFFRyxRQUFRO1FBQ2IsTUFBTSxRQUFRLEdBQUc7WUFDZixJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDO1NBQ3pFLENBQUM7UUFDRixhQUFhLENBQUMsUUFBUSxDQUFDO2FBQ3BCLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxJQUFJLFVBQVUsSUFBSSxnQkFBZ0IsQ0FBQyxFQUN2RixvQkFBb0IsRUFBRSxFQUN0QixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQzdCLEtBQW1CLENBQ3BCLENBQUM7UUFDSixDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFtQixDQUFDLENBQUMsQ0FBQyxFQUNqRixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QjthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ2pCLENBQUM7OEdBNUNVLG1CQUFtQixrQkFhcEIsVUFBVTtrR0FiVCxtQkFBbUIsZ0lBRm5CLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUM7O0FBVWpEO0lBSE4sZUFBZSxDQUFDO1FBQ2YsSUFBSSxFQUFFLFNBQVM7S0FDaEIsQ0FBQzs7dURBQzZCOzJGQVJwQixtQkFBbUI7a0JBSi9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDO2lCQUN6RDs7MEJBY0ksTUFBTTsyQkFBQyxVQUFVOzswQkFHakIsSUFBSTs7MEJBQ0osUUFBUTs7MEJBQUksUUFBUTtzR0FmUCxnQkFBZ0I7c0JBRC9CLE1BQU07Z0JBT0EsVUFBVTtzQkFKaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2VsZixcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpem1EZXN0cm95U2VydmljZSB9IGZyb20gJ0Bwcml6bS11aS9oZWxwZXJzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBtYXAsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJpem1UaGVtZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy90aGVtZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXptVGhlbWUgfSBmcm9tICcuLi8uLi90eXBlcy90aGVtZSc7XG5pbXBvcnQgeyBwcml6bU9ic2VydmFibGUgfSBmcm9tICdAcHJpem0tdWkvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBvZiwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJpem1Mb2NhbFRoZW1lU2VydmljZSB9IGZyb20gJy4vbG9jYWwtdGhlbWUuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1twcml6bVRoZW1lXScsXG4gIHByb3ZpZGVyczogW1ByaXptRGVzdHJveVNlcnZpY2UsIFByaXptTG9jYWxUaGVtZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQcml6bVRoZW1lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByZWFkb25seSBwcml6bVRoZW1lQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQcml6bVRoZW1lPigpO1xuXG4gIEBJbnB1dCgpXG4gIEBwcml6bU9ic2VydmFibGUoe1xuICAgIG5hbWU6ICd0aGVtZSQkJyxcbiAgfSlcbiAgcHVibGljIHByaXptVGhlbWUhOiBQcml6bVRoZW1lO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgdGhlbWUkJDogUmVwbGF5U3ViamVjdDxQcml6bVRoZW1lPiA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRWxlbWVudFJlZilcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aGVtZVNlcnZpY2U6IFByaXptVGhlbWVTZXJ2aWNlLFxuICAgIEBTZWxmKCkgcHJpdmF0ZSByZWFkb25seSBsb2NhbFRoZW1lU2VydmljZTogUHJpem1Mb2NhbFRoZW1lU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwcml2YXRlIHJlYWRvbmx5IHBhcmVudExvY2FsVGhlbWVTZXJ2aWNlOiBQcml6bUxvY2FsVGhlbWVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQ6IFByaXptRGVzdHJveVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHRoZW1lQXJyID0gW1xuICAgICAgdGhpcy50aGVtZSQkLFxuICAgICAgdGhpcy5wYXJlbnRMb2NhbFRoZW1lU2VydmljZT8udGhlbWUkID8/IG9mKG51bGwpLFxuICAgICAgdGhpcy50aGVtZVNlcnZpY2UuZ2V0TGFzdFRoZW1lRm9yRWxlbWVudCQodGhpcy50aGVtZVNlcnZpY2Uucm9vdEVsZW1lbnQpLFxuICAgIF07XG4gICAgY29tYmluZUxhdGVzdCh0aGVtZUFycilcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKFt0aGVtZSwgbG9jYWxUaGVtZSwgdGhlbWVGcm9tU2VydmljZV0pID0+IHRoZW1lIHx8IGxvY2FsVGhlbWUgfHwgdGhlbWVGcm9tU2VydmljZSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRhcCh0aGVtZSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2NhbFRoZW1lU2VydmljZS5zZXRUaGVtZSh0aGVtZSk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlcjIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICB0aGlzLnRoZW1lU2VydmljZS5hdHRUaGVtZUtleSxcbiAgICAgICAgICAgIHRoZW1lIGFzIFByaXptVGhlbWVcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFwKHRoZW1lID0+IHRoaXMucHJpem1UaGVtZUNoYW5nZS5uZXh0KCh0aGlzLnByaXptVGhlbWUgPSB0aGVtZSBhcyBQcml6bVRoZW1lKSkpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19
