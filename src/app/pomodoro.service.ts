import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PomodoroService {
  timers: 'pomodoro' | 'short' | 'long' = 'pomodoro';
  pomdoro_timer = 25;
  short_timer = 5;
  long_timer = 15;

  constructor() {}
}
