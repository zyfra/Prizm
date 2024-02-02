import { PrizmSemVer, PrizmSemVerUpdateCommand } from './model';
export declare function prizmSemVerParse(versionString: string): PrizmSemVer;
export declare function prizmSemVerParse(versionString: string, getCommand: true): PrizmSemVerUpdateCommand;
