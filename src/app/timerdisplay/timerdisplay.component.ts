import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  EventEmitter,
  Input,
  Output,
  inject,
  SimpleChanges,
} from '@angular/core';
import {
  CountdownComponent,
  CountdownConfig,
  CountdownEvent,
} from 'ngx-countdown';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PomodoroService } from '../pomodoro.service';
@Component({
  selector: 'app-timerdisplay',
  standalone: true,
  imports: [CountdownComponent, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './timerdisplay.component.html',
  styleUrl: './timerdisplay.component.css',
})
export class TimerdisplayComponent {
  startStatus = false;

  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;

  @Input() duration!: number;

  @Input() name!: string;

  @Input() timerIndex!: number;

  ngOnChanges(changes: SimpleChanges) {
    /**if name index doesn't match timer index restart timer */
    if (
      changes['timerIndex'] &&
      !(
        changes['timerIndex'].currentValue == this.convertNameToIndex(this.name)
      )
    ) {
      setTimeout(() => this.countdown.restart());
      this.startStatus = false;
    }

    // restart timer if timer duration is updated in settings
    if (changes['duration']) {
      this.startStatus = false;
    }
  }

  @Output() remainingTime = new EventEmitter<{ num: number; name: string }>();

  /** Timer Actions */
  start() {
    this.countdown.begin();
  }

  pause() {
    this.countdown.pause();
  }

  skip() {
    console.log('skip');
    this.remainingTime.emit({ num: 0, name: this.name });
    this.finishTimer();
  }

  pomodoroService = inject(PomodoroService);

  handleTimeChange(e: CountdownEvent) {
    console.log('notify');
    console.log(e.left); // returns in milliseconds

    this.remainingTime.emit({ num: e.left, name: this.name }); // returns timer name and remaining time left
  }

  onTimerFinished(e: CountdownEvent) {
    if (e.action == 'done') {
      this.finishTimer();
    }
  }

  finishTimer() {
    console.log('timer finished');
    console.log('timer name: ', this.name, 'timer index', this.timerIndex);

    // play alarm sound
    const sound = this.pomodoroService.getSound;
    this.playSound(sound);

    let convertedTimerName = this.convertNameToIndex(this.name);
    if (convertedTimerName == 0) {
      this.pomodoroService.addPomodoroCount();
    } else {
      this.pomodoroService.addBreakCount();
    }
    setTimeout(() => this.countdown.restart());
    this.startStatus = false;
  }

  playSound(sound: string) {
    console.log('play sound');
    const sounds = this.pomodoroService.getSoundOptions;
    let alarm_sound = 'message'; // default sound
    if (sounds.includes(sound)) {
      alarm_sound = sound;
    }
    const filename = alarm_sound + '.mp3';
    let audio = new Audio();
    audio.src = `assets/sounds/${filename}`;
    audio.load();
    audio.play();
  }

  convertNameToIndex(name: string) {
    if (name == 'pomodoro') {
      return 0;
    } else if (name == 'short') {
      return 1;
    } else if (name == 'long') {
      return 2;
    } else {
      return 3;
    }
  }
}
