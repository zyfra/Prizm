import {ChangeDetectionStrategy, Component, Inject, Input,} from '@angular/core';
import {ZUI_DATALIST_OPTIONS, ZuiDataListOptions} from "./data-list-options";
import {zuiDefaultProp} from "../../decorators";

@Component({
    selector: 'zui-data-list',
    templateUrl: './data-list.template.html',
    styleUrls: ['./data-list.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class ZuiDataListComponent {
  @Input()
  @zuiDefaultProp()
  iconOff = this.options.empty;

  constructor(
    @Inject(ZUI_DATALIST_OPTIONS)
    readonly options: ZuiDataListOptions
  ) {}
}
