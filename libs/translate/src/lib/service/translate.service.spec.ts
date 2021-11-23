import { TestBed, TestBedStatic } from '@angular/core/testing';
import { IChunk, TranslateLoaderFactory, TranslateService } from '../core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TranslateModule } from '../translate.module';
import { mockLoader, MockLoaderFactory } from '../../testing/mock-loader';
import { jest } from '@jest/globals';

describe('TranslateService', () => {
  let injector: TestBedStatic;
  let translateService: TranslateService;

  beforeEach(() => {
    injector = TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [{ provide: TranslateLoaderFactory, useClass: MockLoaderFactory }],
    });

    translateService = injector.get(TranslateService);
  });

  it('should be created', () => {
    expect(translateService).toBeTruthy();
  });

  it('should default lang undefined', () => {
    expect(translateService.lang).toBeUndefined();
  });

  it('should add chunks', () => {
    const chunk: IChunk = {
      defaultLang: 'en_US',
      id: 'mainModule',
      supportedLangs: ['en_US', 'ru_RU'],
    };

    translateService.addChunk(chunk);
  });

  it('should loading after addChunks and use', () => {
    translateService.addChunk({
      defaultLang: 'en_US',
      id: 'mainModule',
      supportedLangs: ['en_US', 'ru_RU'],
    });

    expect(translateService.lang).toBeUndefined();

    translateService.use('en_US');
  });

  it('should lang change emit and update translation store', (done) => {
    mockLoader.getTranslation('').subscribe((value) => expect(value).toBeNull());

    const getTranslationSpy = jest.spyOn(mockLoader, 'getTranslation');

    translateService.addChunk({
      defaultLang: 'en_US',
      id: 'mainModule',
      supportedLangs: ['en_US', 'ru_RU'],
    });

    const lang = 'en_US';
    const mockTranslation = {};

    getTranslationSpy.mockImplementation(() => of(mockTranslation).pipe(delay(1)));

    translateService.onLang.subscribe((value: string) => {
      expect(value).toBe(lang);

      translateService.use('en_US').subscribe((res) => {
        expect(res).toBeNull();
      });

      done();
    });

    translateService.use(lang);
    expect(getTranslationSpy).toHaveBeenCalledTimes(1);
  });

  it('should get', () => {
    const getTranslationSpy = jest.spyOn(mockLoader, 'getTranslation');

    translateService.addChunk({
      defaultLang: 'en_US',
      id: 'mainModule',
      supportedLangs: ['en_US', 'ru_RU'],
    });

    getTranslationSpy.mockImplementation(()=>
      of({
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
      })
    );

    translateService.use('en_US');

    translateService.get('featureModule1.caption').subscribe((value) => {
      expect(value).toBe('Тест для ВОЗМОЖНОСТИ 1');
    });

    translateService.get('featureModule1.component1.toolbar.button1.caption').subscribe((value) => {
      expect(value).toBe('Добавить');
    });
  });
});
