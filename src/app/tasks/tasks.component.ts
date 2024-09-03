import { Component, inject } from '@angular/core';
import { PomodoroService } from '../pomodoro.service';
import { CommonModule } from '@angular/common';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  pomodoroService = inject(PomodoroService);
}
