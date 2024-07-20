import { Component, inject, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TimerdisplayComponent } from '../timerdisplay/timerdisplay.component';
import { PomodoroService } from '../pomodoro.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-timers',
  standalone: true,
  imports: [MatTabsModule, TimerdisplayComponent],
  templateUrl: './timers.component.html',
  styleUrl: './timers.component.css',
})
export class TimersComponent {
  constructor(private titleService: Title) {}
  selectedIndex = 0; // pomodoro = 0; short = 1; long = 2

  pomodoroService = inject(PomodoroService);

  timerType = this.pomodoroService.getTimerType;

  pomodoro = this.pomodoroService.getPomodoro;
  short = this.pomodoroService.getShort;
  long = this.pomodoroService.getLong;

  /** current timer values (converted from minutes to milliseconds) */
  current_pomodoro = this.pomodoroService.getCurrentPomodoro;
  current_short = this.pomodoroService.getCurrentShort;
  current_long = this.pomodoroService.getCurrentLong;

  /** getters */

  /** setters */
  setSelectedIndex(val: number) {
    this.selectedIndex = val;
  }

  informTabChange(tabIndex: number) {
    this.setSelectedIndex(tabIndex);
    //update tab title
    this.convertTimerDisplay(this.current_pomodoro);
    this.convertTimerDisplay(this.current_short);
    this.convertTimerDisplay(this.current_long);
    switch (tabIndex) {
      case 0: // pomodoro
        this.updateTabTitle(this.convertTimerDisplay(this.current_pomodoro));
        break;
      case 1: // short
        this.updateTabTitle(this.convertTimerDisplay(this.current_short));
        break;
      case 2: // long
        this.updateTabTitle(this.convertTimerDisplay(this.current_long));
        break;
      default:
        this.titleService.setTitle('Pomodoro Pets');
    }
  }
  handleRemainingTime(num: number) {
    if (num != 0) {
      console.log('time remaining: ', num);
    } else {
      console.log('done');
      console.log(this.selectedIndex);
      this.changeTimerTab(this.selectedIndex);
    }
  }

  changeTimerTab(num: number) {
    if (num == 0) {
      // depends on break count
      let break_count = this.pomodoroService.getBreakCount;
      let long_interval = this.pomodoroService.getLongInterval;
      if (break_count % long_interval == 0) {
        this.selectedIndex = 2;
      } else {
        this.selectedIndex = 1;
      }
      // update completed pomodoro count
      this.pomodoroService.addPomodoroCount();
    } else {
      this.selectedIndex = 0;
      // update completed pomodoro count
      this.pomodoroService.addBreakCount();
    }
  }
  // updates tab title timer
  updateTabTitle(timeRemaining: string) {
    this.titleService.setTitle(`${timeRemaining} | Pomodoro Pets`);
  }

  // convert milliseconds to display in HH:mm:ss
  convertTimerDisplay(num: number) {
    if (num >= 3.6 * 10 ** 6) {
      return new Date(num).toISOString().slice(11, 19);
    } else {
      return new Date(num).toISOString().slice(14, 19);
    }

    //TBD
  }

  ngOnInit() {
    this.updateTabTitle(`${this.pomodoro}:00`);
  }
}
