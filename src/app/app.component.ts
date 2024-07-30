import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileService } from '@shared/services/profile.service';
import { TokenService } from '@shared/services/token.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 
  token_service = inject(TokenService);
  profile_service = inject(ProfileService);

  session_time = this.token_service.session_time;

  ngOnInit(): void {
    this.token_service.sessionExpire();
    if(this.token_service.getToken()){
      this.profile_service.me().subscribe((profile)=>{
        console.log(profile);
      });
    }
  }

}
