import { TestBed } from '@angular/core/testing';
import { TranslateLoaderFactory, TranslateService } from '../core';
import { ChangeDetectorRef } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { of } from 'rxjs';
import { TranslateModule } from '../translate.module';

export const createSpyObj = (baseName: string, methodNames: string[]): { [key: string]: any } => {
  const obj: any = {};

  for (let i = 0; i < methodNames.length; i++) {
    obj[methodNames[i]] = jest.fn();
  }

  return obj;
};

import { mockLoader, MockLoaderFactory } from '../../testing/mock-loader';

describe('TranslatePipe', () => {
  let translateService: TranslateService;
  let pipe: TranslatePipe;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        { provide: TranslateLoaderFactory, useClass: MockLoaderFactory },
        { provide: ChangeDetectorRef, useValue: createSpyObj('ChangeDetectorRef', ['markForCheck']) },
      ],
    });

    translateService = injector.get(TranslateService);
    pipe = injector.get(TranslatePipe);
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
    pipe.ngOnDestroy();
  });

  it('should default transform', () => {
    const value = pipe.transform('value');
    expect(value).toBe('value');
  });

  it('should transform null', () => {
    expect(pipe.transform(null)).toBeNull();
    expect(pipe.transform('')).toBe('');
  });

  it('should transform', () => {
    jest.spyOn(mockLoader, 'getTranslation').mockImplementation(() => of({
      featureModule1: {
        caption: 'Тест для ВОЗМОЖНОСТИ 1',
        component1: {
          toolbar: {
            button1: {
              caption: 'Добавить',
            },
          },
        },
      },
    }))

    translateService.addChunk({
      defaultLang: 'en_US',
      id: 'featureModule1',
      supportedLangs: ['en_US', 'ru_RU'],
    });

    translateService.use('en_US');

    expect(pipe.transform('featureModule1.caption')).toBe('Тест для ВОЗМОЖНОСТИ 1');

    expect(pipe.transform('featureModule1.component1.toolbar.button1.caption')).toBe('Добавить');
  });

  it('should transform with undefined', () => {
    jest.spyOn(mockLoader, 'getTranslation').mockImplementation(() =>of(undefined));
    expect(pipe.transform('value')).toBe('value');
  });

  it('should transform with args', () => {
    jest.spyOn(mockLoader, 'getTranslation').mockImplementation(() =>
      of({
        featureModule1: {
          caption: 'Тест для ВОЗМОЖНОСТИ 1 {{email}}',
        },
      })
    );

    translateService.addChunk({
      defaultLang: 'en_US',
      id: 'featureModule1',
      supportedLangs: ['en_US', 'ru_RU'],
    });

    translateService.use('en_US');

    expect(pipe.transform('featureModule1.caption', { email: 'email' })).toBe('Тест для ВОЗМОЖНОСТИ 1 email');
    expect(pipe.transform('featureModule1.caption', { email: 'email' })).toBe('Тест для ВОЗМОЖНОСТИ 1 email');
  });
});
