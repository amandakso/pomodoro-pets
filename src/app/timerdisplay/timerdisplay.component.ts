import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  CountdownComponent,
  CountdownConfig,
  CountdownEvent,
} from 'ngx-countdown';
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
}
