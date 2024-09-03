import { Component } from '@angular/core';
import { TimersComponent } from '../timers/timers.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TimersComponent, TasksComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
