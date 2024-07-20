import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PomodoroService {
  timers: 'pomodoro' | 'short' | 'long' = 'pomodoro';
  pomodoro_timer = 25;
  short_timer = 5;
  long_timer = 15;

  /** current timers converted to milliseconds */
  current_pomodoro = this.pomodoro_timer * 60000;
  current_short = this.short_timer * 60000;
  current_long = this.long_timer * 60000;

  /** counts */
  pomodoro_count = 1;
  break_count = 1;

  long_interval = 4;

  constructor() {}
  // Getters
  /** get timer type */
  get getTimerType() {
    return this.timers;
  }
  /** get timers */
  get getPomodoro() {
    return this.pomodoro_timer;
  }
  get getShort() {
    return this.short_timer;
  }
  get getLong() {
    return this.long_timer;
  }

  /** get current timer display in ms */
  get getCurrentPomodoro() {
    return this.current_pomodoro;
  }
  get getCurrentShort() {
    return this.current_short;
  }
  get getCurrentLong() {
    return this.current_long;
  }

  /**get counts */
  get getPomodoroCount() {
    return this.pomodoro_count;
  }
  get getBreakCount() {
    return this.break_count;
  }
  /**get long interval */
  get getLongInterval() {
    return this.long_interval;
  }

  // add to counts
  addPomodoroCount() {
    this.pomodoro_count += 1;
  }
  addBreakCount() {
    this.break_count += 1;
  }
}
