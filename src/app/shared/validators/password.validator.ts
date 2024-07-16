import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const passwordConfirmation = control.get('password_confirmation');

    if (!password || !passwordConfirmation) {
      return null;
    }

    return password.value === passwordConfirmation.value ? null : { 'mismatch': true };
  };
}