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

  selected_sound = this.pomodoroService.getSound;
  available_sounds = this.pomodoroService.getSoundOptions;

  pomodoro_timer = this.pomodoroService.getPomodoro;
  short_timer = this.pomodoroService.getShort;
  long_timer = this.pomodoroService.getLong;
  long_interval = this.pomodoroService.getLongInterval;

  pomodoroTimerChange(e: any) {
    this.updateTimerChange(e.target.value, e.target.name);
  }

  shortTimerChange(e: any) {
    this.updateTimerChange(e.target.value, e.target.name);
  }

  longTimerChange(e: any) {
    this.updateTimerChange(e.target.value, e.target.name);
  }

  updateTimerChange(val: string, timer: string) {
    if (val.includes('.')) {
      // contains a decimal
      return;
    }
    const num = parseInt(val);
    if (num > 0 && num < 1440) {
      // number in range (update timer)
      if (timer == 'pomodoro') {
        this.pomodoroService.pomodoroTimer = num;
      } else if (timer == 'short') {
        this.pomodoroService.shortTimer = num;
      } else if (timer == 'long') {
        this.pomodoroService.longTimer = num;
      }
    }
    return;
  }

  longIntervalChange(e: any) {
    const num = parseInt(e.target.value);
    if (num > 0 && num < 101) {
      this.pomodoroService.longInterval = num;
    }
    return;
  }

  radioPetChange(e: MatRadioChange) {
    if (this.available_pets.includes(e.value)) {
      this.pomodoroService.currentPet = e.value;
    }
    return;
  }

  radioAlarmChange(e: MatRadioChange) {
    console.log('change alarm');
    if (this.available_sounds.includes(e.value)) {
      this.pomodoroService.currentSound = e.value;

      // play sound
      const filename = e.value + '.mp3';
      let audio = new Audio();
      audio.src = `assets/sounds/${filename}`;
      audio.load();
      audio.play();
    }
    return;
  }
}
