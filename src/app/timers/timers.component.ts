import { Component, inject, Input } from '@angular/core';
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
  selectedIndex = 0; // pomodoro = 0; short = 1; long = 2

  pomodoroService = inject(PomodoroService);

  timerType = this.pomodoroService.getTimerType;

  pomodoro = this.pomodoroService.getPomodoro;
  short = this.pomodoroService.getShort;
  long = this.pomodoroService.getLong;

  /** getters */

  /** setters */
  setSelectedIndex(val: number) {
    this.selectedIndex = val;
  }

  informTabChange(tabIndex: number) {
    this.setSelectedIndex(tabIndex);
    console.log(tabIndex);
  }
  handleRemainingTime(num: number) {
    if (num != 0) {
      console.log('time remaining: ', num);
    } else {
      console.log('done');
    }
  }
}
