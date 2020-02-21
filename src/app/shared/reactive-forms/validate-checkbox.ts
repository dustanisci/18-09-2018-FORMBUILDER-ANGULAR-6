import { AbstractControl } from '@angular/forms';

export function validateCheckbox(control: AbstractControl) {
  let counter = 0;
  control.value.map(res => {
    if (res.checked === false) {
      counter++;
    }
  });
  return counter === control.value.length ? { required: true } : null;
}
