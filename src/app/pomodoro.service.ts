import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PomodoroService {
  timers: 'pomodoro' | 'short' | 'long' = 'pomodoro';
  pomdoro_timer = 25;
  short_timer = 5;
  long_timer = 15;

  /** counts */
  pomodoro_count = 1;
  break_count = 1;

  long_interval = 4;

  constructor() {}
  /** get timer type */
  get getTimerType() {
    return this.timers;
  }
  /** get timers */
  get getPomodoro() {
    return this.pomdoro_timer;
  }
  get getShort() {
    return this.short_timer;
  }
  get getLong() {
    return this.long_timer;
  }
}
