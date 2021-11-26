import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '../translate.module';
import { TranslateCompiler } from '../core';

describe('TranslateCompiler', () => {
  let compiler: TranslateCompiler;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
    });

    compiler = injector.get(TranslateCompiler);
  });

  it('should be created', () => {
    expect(compiler).toBeTruthy();
  });

  it('should compile', () => {
    expect(compiler.compile('result', 'ru_RU')).toBe('result');
  });

  it('should compile translations', () => {
    const translation = { caption: 'Home' };
    expect(compiler.compileTranslations(translation, 'ru_RU')).toEqual(translation);
  });
});
