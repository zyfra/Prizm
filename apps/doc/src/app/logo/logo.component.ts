import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'zui-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}

export const LOGO_CONTENT = 'assets/images/logo.png';
