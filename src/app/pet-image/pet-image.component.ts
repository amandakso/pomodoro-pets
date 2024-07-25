import { Component, inject, Input } from '@angular/core';
import { PomodoroService } from '../pomodoro.service';

@Component({
  selector: 'app-pet-image',
  standalone: true,
  imports: [],
  templateUrl: './pet-image.component.html',
  styleUrl: './pet-image.component.css',
})
export class PetImageComponent {
  pomodoroService = inject(PomodoroService);
  @Input() petType!: string;
}
