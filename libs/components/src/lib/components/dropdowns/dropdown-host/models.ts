import { PrizmDropdownZoneDirective } from "../../../directives/event-zone/event-zone.directive";

export type PrizmDropdownHostWidth = string | number | null;
export type PrizmDropdownHostContext = { zone: PrizmDropdownZoneDirective, custom: PrizmDropdownHostCustomContext  }
export type PrizmDropdownHostCustomContext =  Record<string, unknown>;
