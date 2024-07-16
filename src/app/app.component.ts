import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  session_time = this.token_service.session_time;

  ngOnInit(): void {
    this.token_service.sessionExpire();
  }

}
