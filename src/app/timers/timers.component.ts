import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TimerdisplayComponent } from '../timerdisplay/timerdisplay.component';

@Component({
  selector: 'app-timers',
  standalone: true,
  imports: [MatTabsModule, TimerdisplayComponent],
  templateUrl: './timers.component.html',
  styleUrl: './timers.component.css',
})
export class TimersComponent {}
