import { Component } from '@angular/core';
import { ErrorMsg } from './shared/model/error-msg';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { candy } from './shared/mocky/candy';
import { validateCheckbox } from './shared/reactive-forms/validate-checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public error: ErrorMsg = new ErrorMsg();
  public actionSave = false;

  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    age: [65, []],
    color: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    candy: [candy, [validateCheckbox]],
    jobs: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(private fb: FormBuilder) { }

  public validate(controlName: string, field: string) {
    if (this.form.get(controlName).errors && this.form.get(controlName).errors.required) {
      this.error[controlName] = `${field} é um campo obrigatório`;
    } else if (this.form.get(controlName).errors && this.form.get(controlName).errors.minlength) {
      this.error[controlName] = `${field} é no mínimo ${this.form.get(controlName).errors.minlength.requiredLength} caracteres`;
    } else if (this.form.get(controlName).errors && this.form.get(controlName).errors.maxlength) {
      this.error[controlName] = `${field} é no mínimo ${this.form.get(controlName).errors.maxlength.requiredLength} caracteres`;
    }
  }

  public send(): void {
    this.error = new ErrorMsg();

    let fieldBr: string;
    for (const field of Object.keys(this.form.value)) {

      switch (field) {
        case 'name': {
          fieldBr = 'Nome';
          break;
        }

        case 'color': {
          fieldBr = 'Cor';
          break;
        }

        case 'candy': {
          fieldBr = 'Doce';
          break;
        }

        case 'jobs': {
          fieldBr = 'Jobs';
          break;
        }
      }

      this.validate(field, fieldBr);
    }


    if (this.form.valid) {
      this.actionSave = true;
      setTimeout(() => this.actionSave = false, 1000);
    }

  }

}
