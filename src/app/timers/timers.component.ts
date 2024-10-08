import { Component, inject, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TimerdisplayComponent } from '../timerdisplay/timerdisplay.component';
import { PomodoroService } from '../pomodoro.service';
import { Title } from '@angular/platform-browser';
import { PetImageComponent } from '../pet-image/pet-image.component';
@Component({
  selector: 'app-timers',
  standalone: true,
  imports: [MatTabsModule, TimerdisplayComponent, PetImageComponent],
  templateUrl: './timers.component.html',
  styleUrl: './timers.component.css',
})
export class TimersComponent {
  constructor(private titleService: Title) {}
  selectedIndex = 0; // pomodoro = 0; short = 1; long = 2

  pomodoroService = inject(PomodoroService);

  timerType = this.pomodoroService.getTimerType;

  /** current timer values (converted from minutes to milliseconds) */
  current_pomodoro = this.pomodoroService.getCurrentPomodoro;
  current_short = this.pomodoroService.getCurrentShort;
  current_long = this.pomodoroService.getCurrentLong;

  /** setters */
  setSelectedIndex(val: number) {
    this.selectedIndex = val;
  }

  informIndexChange(tabIndex: number) {
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

  handleRemainingTime(emitter: { num: number; name: string }) {
    if (emitter.num != 0) {
      /** update timer title */
      switch (this.selectedIndex) {
        case 0:
          this.pomodoroService.currentPomodoro = emitter.num;
          if (emitter.name == 'pomodoro') {
            this.updateTabTitle(this.convertTimerDisplay(emitter.num));
          }
          break;
        case 1:
          this.pomodoroService.currentShort = emitter.num;
          if (emitter.name == 'short') {
            this.updateTabTitle(this.convertTimerDisplay(emitter.num));
          }
          break;
        case 2:
          this.pomodoroService.currentLong = emitter.num;
          if (emitter.name == 'long') {
            this.updateTabTitle(this.convertTimerDisplay(emitter.num));
          }
          break;
        default:
          this.titleService.setTitle('Pomodoro Pets');
      }
    } else {
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
    } else {
      this.selectedIndex = 0;
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
  }

  ngOnInit() {
    this.updateTabTitle(`${this.pomodoroService.getPomodoro}:00`);
  }
}
