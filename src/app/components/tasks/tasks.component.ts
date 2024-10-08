import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgFor, TaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

    this.taskService.getTasks().subscribe({
      next: (tasks) => this.tasks = tasks,
    
    }); 
    
  }
  
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe({
        next: () => {
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
          
        },
      }
    );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task.reminder)
  }
}
