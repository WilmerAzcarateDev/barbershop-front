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
import { Router, RouterModule } from '@angular/router';
import { LoginModel } from '@shared/models/login.model';
import { TokenModel } from '@shared/models/token.model';
import { AuthService } from '@shared/services/auth.service';
import { ProfileService } from '@shared/services/profile.service';
import { TokenService } from '@shared/services/token.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  title_service = inject(Title);
  auth_service = inject(AuthService);
  profile_service = inject(ProfileService);
  token_service = inject(TokenService);
  form_builder = inject(FormBuilder);
  router = inject(Router);

  current_user = this.profile_service.profile;

  form: FormGroup;

  login_sub: Subscription = {} as Subscription;
  login_tried: boolean = false;

  constructor() {
    this.form = this.buildForm();
  }

  ngOnDestroy(): void {
    if (this.login_tried) {
      this.login_sub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.title_service.setTitle('Login');
  }

  onSubmit() {
    let credentials: LoginModel = this.form.value;
    this.login_tried = true;
    this.login_sub = this.auth_service.login(credentials).subscribe({
      next: (token: TokenModel) => {
        this.token_service.setToken(token);
        this.router.navigate(['/home']);
      },
    });
  }

  private buildForm(): FormGroup {
    return this.form_builder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }
}
