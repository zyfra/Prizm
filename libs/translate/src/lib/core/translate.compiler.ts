export abstract class TranslateCompiler {
    abstract compile(value: string, lang: string): string | Function;
    abstract compileTranslations(translations: any, lang: string): any;
}