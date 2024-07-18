import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
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

  @Output() remainingTime = new EventEmitter<number>();

  pomodoroService = inject(PomodoroService);

  handleEvent(e: CountdownEvent) {
    console.log('notify');
    console.log(e.left); // returns in milliseconds
    this.remainingTime.emit(e.left);
  }
}
