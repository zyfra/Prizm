import { PrizmDocDemoMainVersion } from './model';

export abstract class PrizmDocDemoAbstractService {
  public abstract open(
    title: string,
    version: PrizmDocDemoMainVersion,
    mainContent: {
      ts: string;
      html: string;
      less?: string;
    }
  ): void;
}
