import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { PomodoroService } from '../pomodoro.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  editable = false;
  pomodoroService = inject(PomodoroService);

  @Input() task!: Task;

  completeTask(id: Date) {
    this.pomodoroService.changeDoneStatus(id);
  }

  updateTask(id: Date, description: string) {
    this.pomodoroService.updateTask(id, description);
    this.editable = false;
  }
  deleteTask(id: Date) {
    this.pomodoroService.deleteTask(id);
  }
}
