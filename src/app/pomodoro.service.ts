import { Injectable } from '@angular/core';
import { Task } from './task';
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

  /** pet  */
  pet_options: string[] = [
    'dog',
    'cat',
    'bunny',
    'penguin',
    'monkey',
    'groundhog',
    'unicorn',
  ];
  pet: string = 'dog';

  /** pet image attributions */
  // <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Freepik - Flaticon</a>

  /** Alarm Sounds */
  sound_options: string[] = ['message', 'piano', 'clock', 'bird', 'cricket'];
  sound: string = 'message';

  // Sound Effect by <a href="https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=125764">UNIVERSFIELD</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=125764">Pixabay</a>

  /** Tasks */

  tasks: Task[] = [{ date: new Date(), description: 'test', done: false }];

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

  get getPetOptions() {
    return this.pet_options;
  }

  /** get alarm sound */
  get getSoundOptions() {
    return this.sound_options;
  }
  get getSound() {
    return this.sound;
  }

  get getTasks() {
    return this.tasks;
  }

  //Setters

  /**set current timers */
  set pomodoroTimer(val: number) {
    this.pomodoro_timer = val;
    return;
  }
  set shortTimer(val: number) {
    this.short_timer = val;
    return;
  }

  set longTimer(val: number) {
    this.long_timer = val;
    return;
  }

  set longInterval(val: number) {
    this.long_interval = val;
    return;
  }

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

  /**set current pet */
  set currentPet(val: string) {
    this.pet = val;
    return;
  }

  /** set alarm sound */

  set currentSound(val: string) {
    this.sound = val;
  }

  // add to counts
  addPomodoroCount() {
    this.pomodoro_count += 1;
  }
  addBreakCount() {
    this.break_count += 1;
  }

  /** task functions */

  //update task done status
  changeDoneStatus(id: Date) {
    const objIndex = this.tasks.findIndex((obj) => obj.date == id);
    this.tasks[objIndex].done = !this.tasks[objIndex].done;
  }

  addTask(description: string) {
    // new task must have a description
    if (description.length == 0) {
      return;
    }
    const newTask: Task = {
      date: new Date(),
      description: description,
      done: false,
    };
    this.tasks.push(newTask);
  }

  updateTask(id: Date, description: string) {
    // updated task must have a description
    if (description.length == 0) {
      return;
    }
    const objIndex = this.tasks.findIndex((obj) => obj.date == id);
    // if task id is found, replace description
    if (objIndex !== -1) {
      this.tasks[objIndex].description = description;
    }
    return;
  }

  deleteTask(id: Date) {
    console.log('delete');
  }
}
