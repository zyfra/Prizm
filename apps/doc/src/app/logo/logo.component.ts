import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'zui-logo',
    templateUrl: './logo.template.html',
    styleUrls: ['./logo.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}

export const LOGO_CONTENT = 'assets/images/logo.png';
