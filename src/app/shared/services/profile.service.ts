import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@env/environment';
import { ProfileModel } from '@shared/models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http = inject(HttpClient);

  url = `${environment.api_url}/auth`;

  profile = signal<ProfileModel|null>(null);

  me(){
    return this.http.post(`${this.url}/me`,null);
  }

}
