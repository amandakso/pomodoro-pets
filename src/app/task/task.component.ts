import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { PomodoroService } from '../pomodoro.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
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
    console.log('id', id);
    console.log('description', description);
  }
}
