import { IChunk, TranslateLoader } from '../core';

export interface IChunkExt extends IChunk {
    /** current lang */
    lang: string;

    /** langs which translation was be loaded */
    initLangs: Set<string>;

    loader: TranslateLoader;
}
