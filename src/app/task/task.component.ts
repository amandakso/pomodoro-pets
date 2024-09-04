import { Component, Input, inject } from '@angular/core';
import { Task } from '../task';
import { PomodoroService } from '../pomodoro.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;

  pomodoroService = inject(PomodoroService);

  completeTask(id: Date) {
    this.pomodoroService.changeDoneStatus(id);
  }
}
