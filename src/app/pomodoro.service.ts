import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PomodoroService {
  timers: 'pomodoro' | 'short' | 'long' = 'pomodoro';
  pomodoro_timer = 3;
  short_timer = 1;
  long_timer = 2;

  /** current timers converted to milliseconds */
  current_pomodoro = this.pomodoro_timer * 60000;
  current_short = this.short_timer * 60000;
  current_long = this.long_timer * 60000;

  /** counts */
  pomodoro_count = 1;
  break_count = 1;

  long_interval = 4;

  /** pet  */
  pet: 'dog' | 'kitty' = 'dog';
  // pet:
  //   | 'dog'
  //   | 'cat'
  //   | 'rabbit'
  //   | 'penguin'
  //   | 'unicorn'
  //   | 'tiger'
  //   | 'monkey'
  //   | 'groundhog' = 'dog';

  /** pet image attributions */
  // <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Freepik - Flaticon</a>

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
  /** get pet */
  get getPet() {
    return this.pet;
  }

  //Setters
  /** set current timer display in ms */
  set currentPomodoro(val: number) {
    this.current_pomodoro = val;
    return;
  }
  set currentShort(val: number) {
    this.current_short = val;
    return;
  }
  set currentLong(val: number) {
    this.current_long = val;
    return;
  }

  // add to counts
  addPomodoroCount() {
    this.pomodoro_count += 1;
  }
  addBreakCount() {
    this.break_count += 1;
  }
}
