import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'pzm-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {}

export const LOGO_CONTENT = 'assets/images/logo.png';
