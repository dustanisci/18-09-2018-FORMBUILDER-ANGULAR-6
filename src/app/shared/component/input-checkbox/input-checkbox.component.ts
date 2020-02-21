import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputCheckbox } from '../../model/input-check-box';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true
    }
  ]
})
export class InputCheckboxComponent implements ControlValueAccessor {

  @Input()
  public error: boolean;

  public checkboxes: InputCheckbox[];
  public onChangeCb: (checkboxes: InputCheckbox[]) => void = () => { };
  public onTouchedCb: (checkboxes: InputCheckbox[]) => void = () => { };

  constructor() {

  }

  public writeValue(checkboxes: InputCheckbox[]): void {
    this.checkboxes = checkboxes;
  }

  public registerOnChange(fn: any): void {
    this.onChangeCb = fn;
    this.error = false;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  public setChecked(value: string | number, checked: boolean): void {
    this.checkboxes.map(res => {
      if (res.value === value) {
        res.checked = checked;
      }
    });
    this.error = false;
    this.onChangeCb(this.checkboxes);
  }

  public selectOrDeselect(checked: boolean): void {
    this.checkboxes.map(res => {
      res.checked = checked;
    });
    this.onChangeCb(this.checkboxes);
  }

}
