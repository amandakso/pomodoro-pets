import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { PomodoroService } from '../pomodoro.service';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    FormsModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  pomodoroService = inject(PomodoroService);
  available_pets = this.pomodoroService.getPetOptions;
}
