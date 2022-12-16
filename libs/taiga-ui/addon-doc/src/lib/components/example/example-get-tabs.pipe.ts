import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: `prizmDocExampleGetTabs`})
export class PrizmDocExampleGetTabsPipe implements PipeTransform {
    public transform(content: Record<string, string>, defaultTab: string): string[] {
        return [defaultTab, ...Object.keys(content)];
    }
}
