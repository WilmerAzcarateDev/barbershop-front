import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegisterModel } from '@shared/models/register.model';
import { TokenModel } from '@shared/models/token.model';
import { AuthService } from '@shared/services/auth.service';
import { TokenService } from '@shared/services/token.service';
import { PasswordValidator } from '@shared/validators/password.validator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit, OnDestroy {
  title_service = inject(Title);
  auth_service = inject(AuthService);
  token_service = inject(TokenService);
  form_builder = inject(FormBuilder);

  form: FormGroup;

  register_sub: Subscription = {} as Subscription;
  register_tried:boolean = false;

  constructor() {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.title_service.setTitle('Register');
  }
  ngOnDestroy(): void {
    if (this.register_tried) {
      this.register_sub.unsubscribe();
    }
  }

  onSubmit() {
    let data: RegisterModel = this.form.value;
    this.register_tried = true;
    this.register_sub = this.auth_service.register(data).subscribe({
      next: (token: TokenModel) => {
        this.token_service.setToken(token);
      },
    });
  }

  private buildForm(): FormGroup {
    return this.form_builder.group(
      {
        name: [
          null,
          [Validators.required, Validators.max(30), Validators.min(5)],
        ],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(/[a-z]/),
            Validators.pattern(/[A-Z]/),
            Validators.pattern(/[0-9]/),
            Validators.pattern(/[@$!%*?&]/),
          ],
        ],
        password_confirmation: [null, [Validators.required]],
      },
      { validator: PasswordValidator() }
    );
  }
}
