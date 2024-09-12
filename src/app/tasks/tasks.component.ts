import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PomodoroService } from '../pomodoro.service';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    TaskComponent,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  pomodoroService = inject(PomodoroService);

  addTask(description: string) {
    this.pomodoroService.addTask(description);
  }

  completeAllTasks() {
    this.pomodoroService.completeAllTasks();
  }
}
