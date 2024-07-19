import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import {
  CountdownComponent,
  CountdownConfig,
  CountdownEvent,
} from 'ngx-countdown';
import { PomodoroService } from '../pomodoro.service';
@Component({
  selector: 'app-timerdisplay',
  standalone: true,
  imports: [CountdownComponent, CommonModule],
  templateUrl: './timerdisplay.component.html',
  styleUrl: './timerdisplay.component.css',
})
export class TimerdisplayComponent {
  startStatus = false;
  @Input() duration!: number;
  config = {
    leftTime: this.duration,
    demand: true,
    format: this.duration > 59 ? 'HH:mm:ss' : 'mm:ss',
    notify: 0,
  };

  @Output() remainingTime = new EventEmitter<number>();

  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;

  /** Timer Actions */
  start() {
    this.countdown.begin();
  }

  pause() {
    this.countdown.pause();
  }

  pomodoroService = inject(PomodoroService);

  handleTimeChange(e: CountdownEvent) {
    console.log('notify');
    console.log(e.left); // returns in milliseconds

    this.remainingTime.emit(e.left);

    // if (e.left == 0) {
    //   setTimeout(() => this.countdown.restart());
    //   this.startStatus = false;
    // }
  }

  onTimerFinished(e: CountdownEvent) {
    if (e.action == 'done') {
      console.log('timer finished');
      setTimeout(() => this.countdown.restart());
      this.startStatus = false;
    }
  }
}
