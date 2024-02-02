import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmLanguage } from '../interfaces';
export declare const PRIZM_DEFAULT_LANGUAGE: InjectionToken<PrizmLanguage>;
export declare const PRIZM_LANGUAGE: InjectionToken<Observable<PrizmLanguage>>;
