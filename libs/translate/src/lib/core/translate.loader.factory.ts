import { TranslateLoader } from './translate.loader';

export abstract class TranslateLoaderFactory {
    abstract loader(chunkId: string): TranslateLoader;
}