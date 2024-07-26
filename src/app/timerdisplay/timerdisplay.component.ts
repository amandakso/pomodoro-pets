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
  config = {
    leftTime: this.duration,
    demand: true,
    format: this.duration > 59 ? 'HH:mm:ss' : 'mm:ss',
    notify: 0,
  };

  @Input() name!: string;

  @Input() timerIndex!: number;

  ngOnChanges(changes: SimpleChanges) {
    /**if name index doesn't match timer index restart timer */
    if (
      !(
        changes['timerIndex'].currentValue == this.convertNameToIndex(this.name)
      )
    ) {
      setTimeout(() => this.countdown.restart());
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

  pomodoroService = inject(PomodoroService);

  handleTimeChange(e: CountdownEvent) {
    console.log('notify');
    console.log(e.left); // returns in milliseconds

    this.remainingTime.emit({ num: e.left, name: this.name }); // returns timer name and remaining time left
  }

  onTimerFinished(e: CountdownEvent) {
    if (e.action == 'done') {
      console.log('timer finished');
      console.log('timer name: ', this.name, 'timer index', this.timerIndex);
      let convertedTimerName = this.convertNameToIndex(this.name);
      if (convertedTimerName == 0) {
        this.pomodoroService.addPomodoroCount();
      } else {
        this.pomodoroService.addBreakCount();
      }
      setTimeout(() => this.countdown.restart());
      this.startStatus = false;
    }
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
