import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'zyfra-input-group-component',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputGroupComponent implements OnInit, OnDestroy {
  public inputControl = new FormControl({ value: 'text', disabled: false }, Validators.required);
  public form: FormGroup;
  private destroyed$ = new Subject();

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      inputName: [{ value: 'text value', disabled: false }, [Validators.required, Validators.maxLength(44)]],
    });
  }

  ngOnInit(): void {
    this.form.controls.inputName.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(value => {
      console.log(value);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
