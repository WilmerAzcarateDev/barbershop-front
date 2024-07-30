import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl) {
  // Example validation logic
  const password = control.get('password')?.value;
  const passwordConfirmation = control.get('password_confirmation')?.value;
  
  if (password !== passwordConfirmation) {
    return { passwordMismatch: true };
  }
  return null;
}