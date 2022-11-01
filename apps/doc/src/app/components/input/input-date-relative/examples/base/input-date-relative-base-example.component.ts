import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pzm-input-date-relative-base-example',
  templateUrl: './input-date-relative-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PzmInputDateRelativeBaseExampleComponent {
  public readonly valueControl = new FormControl();
}
