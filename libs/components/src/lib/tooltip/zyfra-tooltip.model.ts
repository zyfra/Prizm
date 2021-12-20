import { TemplateRef } from '@angular/core';

export class ZyfraTooltipOptionsModel {
  left?: number;
  top?: number;
  className?: string;
  content?: string | TemplateRef<any>;
  context: Record<string, unknown>;
}
