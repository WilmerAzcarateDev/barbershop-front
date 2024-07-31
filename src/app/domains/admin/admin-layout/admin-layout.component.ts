import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CalendarComponent } from '@shared/components/calendar/calendar.component';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule,CalendarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent implements OnInit{
  
  notification_service = inject(NotificationService);

  ngOnInit(): void {
    this.notification_service.channel.bind('notification',(data:any)=>{
      console.log(data);
    });
  }
  

}
