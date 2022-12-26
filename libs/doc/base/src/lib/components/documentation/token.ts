import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export type PrizmHostComponentInfo = BehaviorSubject<{
  key: string;
} | null>;

export const PRIZM_HOST_COMPONENT_INFO_TOKEN = new InjectionToken<PrizmHostComponentInfo>(
  'host component token'
);
