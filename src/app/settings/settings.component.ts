import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule, MatRadioChange } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, NgModel } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PomodoroService } from '../pomodoro.service';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent {
  pomodoroService = inject(PomodoroService);
  selected_pet = this.pomodoroService.getPet;
  available_pets = this.pomodoroService.getPetOptions;

  pomodoro_timer = this.pomodoroService.getPomodoro;

  pomodoroTimerChange(e: any) {
    const val = e.target.value;
    const num = parseInt(val);
    if (val.includes('.')) {
      // contains a decimal
      return;
    }
    if (num > 0 && num < 1440) {
      // number in range (update timer)
      this.pomodoroService.pomodoroTimer = num;
    }
    return;
  }

  radioChange(e: MatRadioChange) {
    if (this.available_pets.includes(e.value)) {
      this.pomodoroService.currentPet = e.value;
    }
    return;
  }
}
