import { Component, Input} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, HttpClientModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  faTimes = faTimes;

}
