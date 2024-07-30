import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarComponent } from '@shared/components/calendar/calendar.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [CommonModule,CalendarComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

}
