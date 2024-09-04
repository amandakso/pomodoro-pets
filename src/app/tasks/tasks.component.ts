import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PomodoroService } from '../pomodoro.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, MatIconModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  pomodoroService = inject(PomodoroService);

  addTask(description: string) {
    this.pomodoroService.addTask(description);
  }
}
