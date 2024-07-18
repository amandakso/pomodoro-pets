import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TimerdisplayComponent } from '../timerdisplay/timerdisplay.component';
import { PomodoroService } from '../pomodoro.service';
@Component({
  selector: 'app-timers',
  standalone: true,
  imports: [MatTabsModule, TimerdisplayComponent],
  templateUrl: './timers.component.html',
  styleUrl: './timers.component.css',
})
export class TimersComponent {
  pomodoroService = inject(PomodoroService);

  pomodoro = this.pomodoroService.getPomodoro;
  short = this.pomodoroService.getShort;
  long = this.pomodoroService.getLong;
}
