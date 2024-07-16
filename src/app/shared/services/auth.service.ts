import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment.development';
import { LoginModel } from '@shared/models/login.model';
import { RegisterModel } from '@shared/models/register.model';
import { TokenModel } from '@shared/models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  url = `${environment.api_url}/auth`;

  login(credentials:LoginModel){
    return this.http.post<TokenModel>(`${this.url}/login`,credentials);
  }

  register(data:RegisterModel){
    return this.http.post<TokenModel>(`${this.url}/register`,data);
  }
}
