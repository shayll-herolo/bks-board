import { ValidatorFn, AbstractControl } from '@angular/forms';

export function alphaValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = !/^[A-Za-z\-_\s]+$/i.test(control.value);
      return forbidden ? {alpha: {value: control.value}} : null;
    };
  }
