import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
task: Task[] = TASKS

}
