import { Injectable } from '@angular/core';
import { environment } from '@env/environment.development';

import Pusher, { Channel } from 'pusher-js';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  pusher:Pusher;
  channel:Channel;

  constructor(){
    this.pusher = new Pusher(environment.pusher.key,{
      cluster: environment.pusher.cluster
    });
    
    this.channel = this.pusher.subscribe('public');
  }

}


