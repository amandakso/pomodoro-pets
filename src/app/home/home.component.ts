import { Component } from '@angular/core';
import { TimersComponent } from '../timers/timers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
