import {ChangeDetectionStrategy, Component} from '@angular/core';
import {PolymorpheusComponent} from '@digital-plant/zui-components';

@Component({
    selector: 'logo',
    templateUrl: './logo.template.html',
    styleUrls: ['./logo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}

export const LOGO_CONTENT = 'assets/images/logo.png';
