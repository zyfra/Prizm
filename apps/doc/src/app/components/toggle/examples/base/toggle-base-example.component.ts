import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pzm-toggle-base-example',
  templateUrl: './toggle-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PzmToggleBaseExampleComponent implements OnInit {
  public value = true;
  public readonly value2 = new FormControl(false);
  public valueDisabled = false;
  public readonly value2Disabled = new FormControl(false);

  public ngOnInit(): void {
    this.value2Disabled.disable();
  }
}
